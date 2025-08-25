# Implementasi Fetch Data Testimoni

## Overview
Dokumen ini menjelaskan implementasi lengkap untuk fetch data testimoni dari API Laravel ke frontend Nuxt.js.

## Struktur Backend (Laravel)

### 1. Model Testimoni
```php
// app/Models/Testimoni.php
class Testimoni extends Model
{
    protected $table = 'testimoni';
    protected $fillable = ['nama', 'testimoni', 'instansi', 'gambar', 'created_by', 'updated_by', 'deleted_by'];
    
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
```

### 2. API Controller
```php
// app/Http/Controllers/Api/TestimoniController.php
class TestimoniController extends Controller
{
    public function index()
    {
        $testimoni = \Cache::remember('api_testimoni_data', 1800, function() {
            return Testimoni::select(['id', 'nama', 'testimoni', 'instansi', 'gambar', 'created_by', 'created_at', 'updated_at'])
                ->with(['createdBy:id,name'])
                ->orderBy('created_at', 'desc')
                ->get()
                ->map(function($item) {
                    if ($item->gambar) {
                        $item->gambar = \Storage::disk('public')->url($item->gambar);
                    }
                    return $item;
                });
        });

        return response()->json($testimoni);
    }
}
```

### 3. API Routes
```php
// routes/api.php
use App\Http\Controllers\Api\TestimoniController;

Route::get('/testimoni', [TestimoniController::class, 'index']);
```

### 4. Database Seeder
```php
// database/seeders/TestimoniSeeder.php
class TestimoniSeeder extends Seeder
{
    public function run(): void
    {
        $testimonis = [
            [
                'nama' => 'Ahmad Rizki',
                'testimoni' => 'Sangat puas dengan layanan yang diberikan...',
                'instansi' => 'PT Maju Bersama',
                'gambar' => null,
                'created_by' => 1,
                'updated_by' => 1,
            ],
            // ... more data
        ];

        foreach ($testimonis as $testimoni) {
            Testimoni::create($testimoni);
        }
    }
}
```

## Struktur Frontend (Nuxt.js)

### 1. Store (Pinia)
```typescript
// stores/testimoni.ts
interface TestimoniData {
  id         : string
  nama       : string
  testimoni  : string
  instansi   : string
  gambar     : string | null
  created_by : string
  created_at : string
  updated_at : string
  createdBy  : {
    id   : string
    name : string
  }
}

export const useTestimoniStore = defineStore('testimoni', {
  state: () => ({
    testimoniData: [] as TestimoniData[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getTestimoniData: (state) => state.testimoniData,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },

  actions: {
    async fetchTestimoniData() {
      this.loading = true
      this.error = null
      
      try {
        const { $api } = useNuxtApp()
        const apiUrl = $api ? $api.testimoni() : 'http://localhost:8000/api/testimoni'
        
        const response = await $fetch<TestimoniData[]>(apiUrl, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        
        if (Array.isArray(response)) {
          this.testimoniData = response
        } else {
          throw new Error('Format response tidak valid')
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        this.error = `Gagal memuat data testimoni: ${errorMessage}`
      } finally {
        this.loading = false
      }
    }
  }
})
```

### 2. API Plugin
```typescript
// plugins/api.client.ts
const api = {
  testimoni: () => `${apiBase}/testimoni`,
  getImageUrl: (imagePath: string | null | undefined) => {
    if (!imagePath) {
      return '/images/testimonial/author-img.jpg'
    }
    
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath
    }
    
    const cleanStorageBase = storageBase.endsWith('/') ? storageBase.slice(0, -1) : storageBase;
    return `${cleanStorageBase}/api/images/${imagePath}`
  }
}
```

### 3. Komponen Testimonials
```vue
<!-- components/Testimonials.vue -->
<template>
  <div class="testimonial-area">
    <!-- Loading state -->
    <div v-if="testimoniStore.isLoading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3">Memuat testimoni...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="testimoniStore.hasError" class="text-center py-5">
      <div class="alert alert-warning" role="alert">
        {{ testimoniStore.hasError }}
      </div>
      <button @click="testimoniStore.fetchTestimoniData()" class="btn btn-primary">
        Coba Lagi
      </button>
    </div>

    <!-- Data testimoni -->
    <client-only v-else-if="testimoniStore.getTestimoniData.length > 0">
      <Swiper
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :slides-per-view="1"
        :loop="true"
      >
        <SwiperSlide v-for="testimoni in testimoniStore.getTestimoniData" :key="testimoni.id">
          <div class="testimonial-content">
            <blockquote v-html="testimoni.testimoni"></blockquote>
            <div class="testi-info d-flex align-items-center mt-40">
              <div class="testi-avatar mr-25">
                <img
                  class="rounded-circle"
                  :src="getImageUrl(testimoni.gambar)"
                  :alt="`${testimoni.nama} testimoni`"
                  @error="handleImageError"
                />
              </div>
              <div class="avatar-info">
                <h5 class="mb-1 text-capitalize">{{ testimoni.nama }}</h5>
                <p class="meta-text-color mb-0">{{ testimoni.instansi }}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </client-only>

    <!-- Empty state -->
    <div v-else class="text-center py-5">
      <div class="alert alert-info" role="alert">
        Belum ada testimoni yang tersedia.
      </div>
    </div>
  </div>
</template>

<script>
import { useTestimoniStore } from "@/stores/testimoni";

export default {
  setup() {
    const testimoniStore = useTestimoniStore();
    const { $api } = useNuxtApp();

    // Fetch data testimoni saat komponen dimount
    testimoniStore.fetchTestimoniData();

    const getImageUrl = (imagePath) => {
      if ($api && $api.getImageUrl) {
        return $api.getImageUrl(imagePath);
      }
      
      if (!imagePath) {
        return '/images/testimonial/author-img.jpg';
      }
      
      if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath;
      }
      
      return `http://localhost:8000/api/images/${imagePath}`;
    };

    const handleImageError = (event) => {
      event.target.src = '/images/testimonial/author-img.jpg';
    };

    return {
      testimoniStore,
      getImageUrl,
      handleImageError,
    };
  }
}
</script>
```

## Cara Menjalankan

### 1. Backend (Laravel)
```bash
# Jalankan migration
php artisan migrate

# Jalankan seeder
php artisan db:seed --class=TestimoniSeeder

# Atau jalankan semua seeder
php artisan db:seed

# Jalankan server
php artisan serve
```

### 2. Frontend (Nuxt.js)
```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

## Testing API

### 1. Test API Endpoint
```bash
curl -X GET http://localhost:8000/api/testimoni
```

### 2. Expected Response
```json
[
  {
    "id": 1,
    "nama": "Ahmad Rizki",
    "testimoni": "Sangat puas dengan layanan yang diberikan...",
    "instansi": "PT Maju Bersama",
    "gambar": null,
    "created_by": 1,
    "created_at": "2024-01-15T10:30:00.000000Z",
    "updated_at": "2024-01-15T10:30:00.000000Z",
    "createdBy": {
      "id": 1,
      "name": "Admin"
    }
  }
]
```

## Fitur yang Diimplementasikan

1. **Loading State**: Menampilkan spinner saat data sedang dimuat
2. **Error Handling**: Menampilkan pesan error dan tombol retry
3. **Empty State**: Menampilkan pesan jika tidak ada data
4. **Image Handling**: Fallback image jika gambar tidak tersedia
5. **Caching**: Cache API response selama 30 menit
6. **Responsive Design**: Komponen responsive untuk berbagai ukuran layar
7. **Auto-play Slider**: Swiper dengan auto-play dan pagination

## Troubleshooting

### 1. CORS Error
Pastikan CORS sudah dikonfigurasi di Laravel:
```php
// config/cors.php
return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
```

### 2. Image Not Loading
- Pastikan storage link sudah dibuat: `php artisan storage:link`
- Periksa permission folder storage
- Pastikan URL gambar sudah benar

### 3. API Not Found
- Periksa route sudah terdaftar: `php artisan route:list`
- Pastikan controller namespace benar
- Periksa cache route: `php artisan route:clear`

### 4. Database Error
- Jalankan migration: `php artisan migrate`
- Periksa koneksi database
- Jalankan seeder: `php artisan db:seed --class=TestimoniSeeder`

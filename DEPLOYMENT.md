# Panduan Deployment

## Konfigurasi Environment

### 1. Buat file `.env` di root folder kaifront

```bash
# Development
NUXT_PUBLIC_API_BASE=http://localhost:8000/api
NUXT_PUBLIC_AUTH_BASE=http://localhost:8000/api/auth
NUXT_PUBLIC_STORAGE_BASE=http://localhost:8000

# Production (ganti dengan domain Anda)
NUXT_PUBLIC_API_BASE=https://your-domain.com/api
NUXT_PUBLIC_AUTH_BASE=https://your-domain.com/api/auth
NUXT_PUBLIC_STORAGE_BASE=https://your-domain.com
```

### 2. Konfigurasi Laravel Backend

Pastikan folder `public/images` di Laravel dapat diakses dan memiliki permission yang tepat:

```bash
# Set permission untuk folder images
chmod -R 755 public/images
```

### 3. CORS Configuration

Pastikan CORS di Laravel dikonfigurasi untuk mengizinkan akses dari domain frontend:

```php
// config/cors.php
return [
    'paths' => ['api/*', 'images/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:3000', 'https://your-frontend-domain.com'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
```

### 4. Build dan Deploy

```bash
# Build Nuxt untuk production
npm run build

# Deploy ke server
npm run preview
```

## Troubleshooting

### Gambar tidak muncul
1. Periksa apakah file gambar ada di `public/images/`
2. Periksa permission folder dan file
3. Periksa konfigurasi CORS
4. Periksa URL di browser developer tools

### API Error
1. Periksa konfigurasi environment variables
2. Periksa apakah backend Laravel berjalan
3. Periksa log Laravel untuk error detail

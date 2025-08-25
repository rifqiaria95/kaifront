<template>
  <div id="pendidikan" class="education-area over-hidden">
    <div class="container">
      <div class="row position-relative">
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <!-- Title -->
          <div class="position-relative">
            <div class="title">
              <span class="theme-color text-uppercase d-block mb-1"
                >Pendidikan</span
              >
              <h2 class="mb-25">Pendidikan Saya</h2>
              <p>
                Berikut adalah pendidikan saya yang telah saya tempuh selama ini.
              </p>
            </div>
            <!-- /title -->
          </div>
          
          <!-- Loading State -->
          <div v-if="loading" class="education-wrapper mr-20 pt-25 mb-50 text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <p class="mt-3">Memuat data education...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="error" class="education-wrapper mr-20 pt-25 mb-50">
            <div class="alert alert-danger" role="alert">
              <h4 class="alert-heading">Error!</h4>
              <p>{{ error }}</p>
              <div class="mt-3">
                <button class="btn btn-sm btn-outline-danger me-2" @click="educationStore.fetchEducationData()">
                  Coba Lagi
                </button>
                <button class="btn btn-sm btn-outline-secondary" @click="educationStore.clearError()">
                  Tutup Error
                </button>
              </div>
            </div>
          </div>

          <!-- Education Content -->
          <div v-else class="education-wrapper mr-20 pt-25 mb-50">
            
            <!-- Education content -->
            <ul class="education-content">
              <li
                v-for="(education, index) in educationData"
                :key="education.id"
                class="mb-32 d-flex align-items-start rotate-hover"
              >
                <div
                  class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"
                >
                  <span class="theme-color d-inline-block">
                    <span
                      class="d-block rotate flat-family flaticon-graduation-cap"
                    ></span>
                  </span>
                </div>
                <!-- /education-ser-icon -->
                <div class="experience-service-text d-inline-block">
                  <h3 class="mb-2">{{ cleanText(education.title) }}</h3>
                  <h4>
                    {{ cleanText(education.institution) }}
                    <span class="meta-text-color openS-font-family">
                      ( {{ education.year }} )</span
                    >
                  </h4>
                  <div class="description-container">
                    <div 
                      class="mb-0 mt-15 description-text"
                      :class="{ 'expanded': expandedStates[index] }"
                      v-html="education.description"
                    ></div>
                    <button 
                      v-if="shouldShowReadMore(education.description)"
                      class="btn btn-sm btn-outline-secondary mt-3 read-more-btn"
                      @click="toggleDescription(index)"
                    >
                      {{ expandedStates[index] ? 'Sembunyikan' : 'Baca Selengkapnya' }}
                    </button>
                  </div>
                </div>
              </li>
              
              <!-- Fallback content jika tidak ada data -->
              <li v-if="educationData.length === 0" class="mb-32 d-flex align-items-start rotate-hover">
                <div
                  class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"
                >
                  <span class="theme-color d-inline-block">
                    <span
                      class="d-block rotate flat-family flaticon-graduation-cap"
                    ></span>
                  </span>
                </div>
                <!-- /education-ser-icon -->
                <div class="experience-service-text d-inline-block">
                  <h3 class="mb-2">Sekolah Dasar</h3>
                  <h4>
                    SD Negeri
                    <span class="meta-text-color openS-font-family">
                      ( 1985 - 1991 )</span
                    >
                  </h4>
                  <div class="description-container">
                    <p 
                      class="mb-0 mt-15 description-text"
                      :class="{ 'expanded': fallbackExpanded }"
                    >
                      Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.
                    </p>
                    <button 
                      class="btn btn-sm btn-outline-secondary mt-3 read-more-btn"
                      @click="fallbackExpanded = !fallbackExpanded"
                    >
                      {{ fallbackExpanded ? 'Sembunyikan' : 'Baca Selengkapnya' }}
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- /education-wrapper -->
        </div>
        <!-- /col -->
        <!-- Education image -->
        <div
          class="col-xl-5 offset-xl-1 col-lg-6 col-md-12 col-sm-12 col-12 d-lg-blok d-flex align-items-center justify-content-center"
        >
          <div
            class="education-img position-relative text-center"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img
              class="border-radius10"
              :class="`${imgGrayScale ? 'img-grayscale' : ''}`"
              :src="imageUrl"
              :alt="educationData.length > 0 ? cleanText(educationData[0].title) : 'Education Image'"
              @error="handleImageError"
              @load="handleImageLoad"
            />
          </div>
          <!-- /education-img -->
        </div>
        <!-- /col -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
</template>

<script setup>
import { useEducationStore } from '~/stores/education'
import { cleanText } from '~/utils/stripHtml'

defineProps({
  imgGrayScale: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default: "/images/education/education.jpg",
  },
})

// Store
const educationStore = useEducationStore()

// State untuk image error handling
const imageError = ref(false)

// State untuk expanded description
const expandedStates = ref({})
const fallbackExpanded = ref(false)

// Computed
const educationData = computed(() => {
  const data = educationStore.getEducationData
  console.log('Education component - educationData computed:', data)
  return data
})
const loading = computed(() => educationStore.isLoading)
const error = computed(() => educationStore.hasError)

// Computed untuk image URL
const imageUrl = computed(() => {
  // Use first education item's image if available, otherwise use default
  if (educationData.value.length > 0 && educationData.value[0].image) {
    return getImageUrl(educationData.value[0].image)
  }
  return '/images/education/education.jpg'
})

// Functions
const { $api } = useNuxtApp()

const getImageUrl = (imagePath) => {
  // Jika imagePath undefined atau null, langsung return default
  if (!imagePath) {
    return '/images/education/education.jpg'
  }
  
  // Pastikan $api tersedia (untuk SSR)
  if (!$api) {
    // Jika image path sudah full URL
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath
    }
    
    // Jika image path dimulai dengan slash, gunakan sebagai path relatif
    if (imagePath.startsWith('/')) {
      return imagePath
    }
    
    // Fallback ke default storage base
    return `http://localhost:8000/images/${imagePath}`
  }
  
  return $api.getImageUrl(imagePath)
}

const handleImageError = (event) => {
  imageError.value = true
  
  // Coba fallback ke default image jika bukan default image yang gagal
  const img = event.target
  if (!img.src.includes('education.jpg')) {
    img.src = '/images/education/education.jpg'
  }
}

const handleImageLoad = (event) => {
  imageError.value = false
}

// Function untuk mengecek apakah perlu menampilkan tombol "Baca Selengkapnya"
const shouldShowReadMore = (description) => {
  if (!description) return false
  
  // Perkiraan jumlah karakter untuk 4 baris (sekitar 200-250 karakter)
  const estimatedCharsPerLine = 60
  const maxChars = estimatedCharsPerLine * 4
  
  return description.length > maxChars
}

// Function untuk toggle expanded state
const toggleDescription = (index) => {
  expandedStates.value[index] = !expandedStates.value[index]
}

// Fetch data saat komponen di-mount
onMounted(async () => {
  console.log('Education component mounted')
  console.log('Current education data length:', educationData.value.length)
  if (educationData.value.length === 0) {
    console.log('Fetching education data...')
    await educationStore.fetchEducationData()
  } else {
    console.log('Education data already exists')
  }
})
</script>

<style scoped>
.description-container {
  position: relative;
}

.description-text {
  line-height: 1.6;
  max-height: 6.4em; /* 4 baris dengan line-height 1.6 */
  overflow: hidden;
  transition: max-height 0.3s ease;
  position: relative;
}

.description-text.expanded {
  max-height: none;
}

/* Styling untuk paragraf di dalam description-text */
.description-text p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.description-text p:last-child {
  margin-bottom: 0;
}

.description-text:not(.expanded)::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 1.6em; /* Satu baris */
  background: linear-gradient(transparent, white);
  pointer-events: none;
}

.read-more-btn {
  color: #000;
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.read-more-btn:hover {
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

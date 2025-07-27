<template>
  <div id="about" class="about-area mt-170 mb-105">
    <div class="about-content-wrapper position-relative">
      <div class="container">
        <div class="row">
          <div
            class="col-xl-6 col-lg-6 col-md-12 offset-md-0 col-sm-11 offset-sm-1 col-12"
          >
            <div class="about-img-wrapper position-relative mb-100">
              <div
                class="about-img position-relative z-index11"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="100"
              >
                <div
                  class="about-img-over over-hidden z-index11 pl-50 transition5 d-inline-block position-relative"
                >
                  <img
                    class="img-grayscale border-radius12 position-relative z-index11 tilt"
                    :src="imageUrl"
                    :alt="aboutData?.title ? cleanText(aboutData.title) : 'About Image'"
                    @error="handleImageError"
                    @load="handleImageLoad"
                  />
                  <!-- Debug info untuk image -->
                  <div v-if="imageError" class="mt-2 p-2 bg-warning text-dark small">
                    <strong>Image Debug:</strong><br>
                    Image Path: {{ aboutData?.image || 'null' }}<br>
                    Expected Location: http://localhost:8000/images/{{ aboutData?.image || 'null' }}<br>
                    <button @click="imageError = false" class="btn btn-sm btn-outline-warning mt-1">
                      Hide Debug
                    </button>
                  </div>
                </div>
              </div>
              <!-- /about-img -->
              <div
                class="about-color-shape-bg position-absolute z-index1"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="800"
              ></div>
              <div
                class="about-shape-dotted secondary-bg position-absolute z-index-1"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="1000"
              >
                <img src="/images/about/about-dott.png" alt="" />
              </div>
            </div>
            <!-- /about-img-wrapper -->
          </div>
          <!-- /col -->
          <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <!-- Loading State -->
            <div v-if="loading" class="about-content position-relative mb-50 text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <p class="mt-3">Memuat data about...</p>
            </div>

            <!-- Error State -->
            <div v-else-if="error" class="about-content position-relative mb-50">
              <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Error!</h4>
                <p>{{ error }}</p>
                <div class="mt-3">
                  <button class="btn btn-sm btn-outline-danger me-2" @click="aboutStore.fetchAboutData()">
                    Coba Lagi
                  </button>
                  <button class="btn btn-sm btn-outline-secondary" @click="aboutStore.clearError()">
                    Tutup Error
                  </button>
                </div>
                <div class="mt-3">
                  <small class="text-muted">
                    About Data: {{ aboutData ? 'Loaded' : 'Not loaded' }}
                  </small>
                  <br>
                  <small class="text-muted">
                    Loading: {{ loading ? 'Yes' : 'No' }}
                  </small>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div v-else class="about-content position-relative mb-50">
              <div class="position-relative">
                <div class="title">
                  <span class="theme-color text-uppercase d-block mb-1 mt--5"
                    >{{ aboutData?.title ? cleanText(aboutData.title) : 'About Me' }}</span
                  >
                  <h2 class="mb-30">{{ aboutData?.subtitle ? cleanText(aboutData.subtitle) : 'About Me' }}</h2>
                </div>
                <!-- /title -->
              </div>
              <p class="mb-25" v-if="aboutData?.description">
                {{ cleanText(aboutData.description) }}
              </p>
              <p class="mb-25" v-else>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia dese runt mollit anim id est laboru doloremque
                laudantium, totaeaque ipsa quae ab illo inven tore veritatis et
                quasi architecto beatae vitae.
              </p>
              <p v-else>Oremque laudantium, totaeaque ipsa quae</p>
              <div class="about-info-wrapper pt-25 pb-20 mt-25">
                <div class="row">
                  <div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                    <div class="about-info-item mb-3">
                      <span class="label">Name:</span>
                      <span class="value">Selly Andriany Gantina</span>
                    </div>
                    <div class="about-info-item mb-3">
                      <span class="label">Age:</span>
                      <span class="value">29 Years</span>
                    </div>
                    <div class="about-info-item mb-3">
                      <span class="label">Occupation:</span>
                      <span class="value">System Engineer</span>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                    <div class="about-info-item mb-3">
                      <span class="label">Phone:</span>
                      <span class="value">{{ aboutData?.phone || '081210396214' }}</span>
                    </div>
                    <div class="about-info-item mb-3">
                      <span class="label">Email:</span>
                      <span class="value">{{ aboutData?.email || 'rbenity@gmail.com' }}</span>
                    </div>
                    <div class="about-info-item mb-3">
                      <span class="label">Nationality:</span>
                      <span class="value">Indonesian</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /about-info-wrapper -->
              <div
                class="about-footer-content d-sm-flex align-items-center mt-lg-2 mt-sm-4 mt-3"
              >
                <div class="signature pt-12 pr-45">
                  <img :src="signature" alt="" />
                </div>
                <div class="about-footer-content-right mt-20 text-left">
                  <h6 class="d-xl-inline-block text-uppercase pr5 mb-0">
                    SELLY ANDRIANY GANTINA
                  </h6>
                  <span class="openS-font-family meta-text-color"
                    >Anggota Dewan Perwakilan Rakyat RI 2024-2029.</span
                  >
                </div>
              </div>
              <!-- /about-footer-content -->
            </div>
            <!-- /about-content -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /about-wrapper -->
  </div>
</template>

<script setup>
import { useAboutStore } from '~/stores/about'
import { cleanText } from '~/utils/stripHtml'

defineProps({
  signature: {
    type: String,
    default: "/images/about/signature.png",
  },
})

// Store
const aboutStore = useAboutStore()

// State untuk image error handling
const imageError = ref(false)

// Computed
const aboutData = computed(() => aboutStore.getAboutData)
const loading = computed(() => aboutStore.isLoading)
const error = computed(() => aboutStore.hasError)

// Computed untuk image URL
const imageUrl = computed(() => {
  return getImageUrl(aboutData.value?.image)
})

// Functions
const { $api } = useNuxtApp()

const getImageUrl = (imagePath) => {
  // Jika imagePath undefined atau null, langsung return default
  if (!imagePath) {
    return '/images/about/about-img.jpg'
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
  if (!img.src.includes('about-img.jpg')) {
    img.src = '/images/about/about-img.jpg'
  }
}

const handleImageLoad = (event) => {
  imageError.value = false
}

// Fetch data saat komponen di-mount
onMounted(async () => {
  if (!aboutData.value) {
    await aboutStore.fetchAboutData()
  }
})
</script>

<style scoped>
.about-info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
}

.about-info-item .value {
  font-weight: normal;
  color: #666;
  flex: 1;
  word-wrap: break-word;
  line-height: 1.4;
}

.about-info-item .label {
  font-weight: bold;
  color: #333;
  min-width: 100px;
  margin-right: 15px;
  flex-shrink: 0;
}

/* Memastikan alignment yang tepat */
.about-info-wrapper {
  margin-top: 30px;
  margin-bottom: 30px;
}

.about-info-wrapper .row {
  align-items: flex-start;
}

.about-info-wrapper .col-xl-6 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>

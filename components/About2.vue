<template>
  <div id="about" class="about-area mt-170 mb-105">
    <div class="about-content-wrapper position-relative">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-12 offset-md-0 col-sm-11 offset-sm-1 col-12">
            <div class="about-img-wrapper position-relative mb-100">
              <div class="about-img position-relative z-index11" data-aos="fade-right" data-aos-duration="2000"
                data-aos-delay="100">
                <div class="about-img-over over-hidden z-index11 pl-50 transition5 d-inline-block position-relative">
                  <img class="img-grayscale border-radius12 position-relative z-index11 tilt" :src="imageUrl"
                    :alt="aboutData?.title ? cleanText(aboutData.title) : 'About Image'" @error="handleImageError"
                    @load="handleImageLoad" />
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
              <div class="about-color-shape-bg position-absolute z-index1" data-aos="fade-right"
                data-aos-duration="2000" data-aos-delay="800"></div>
              <div class="about-shape-dotted secondary-bg position-absolute z-index-1" data-aos="fade-right"
                data-aos-duration="2000" data-aos-delay="1000">
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
                  <span
                    class="theme-color text-uppercase d-block mb-1 mt--5">{{ aboutData?.title ? cleanText(aboutData.title) : 'Tentang Saya' }}</span>
                  <h2 class="mb-30">{{ aboutData?.subtitle ? cleanText(aboutData.subtitle) : 'Tentang Saya' }}</h2>
                </div>
                <!-- /title -->
              </div>
              <!-- Tampilkan hanya 4 paragraf -->
              <template v-if="aboutData?.description">
                <template
                  v-for="(paragraf, idx) in cleanText(aboutData.description).split('\n').filter(p => p.trim() !== '').slice(0, 4)"
                  :key="idx">
                  <p class="mb-25">{{ paragraf }}</p>
                </template>
              </template>
              <template v-else>
                <p class="mb-25">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum doloremque
                  laudantium, totaeaque ipsa quae ab illo inventore veritatis et
                  quasi architecto beatae vitae.
                </p>
                <p class="mb-25">
                  Oremque laudantium, totaeaque ipsa quae ab illo inventore veritatis.
                </p>
                <p class="mb-25">
                  Sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p class="mb-25">
                  Quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </template>
              <!-- Tombol Read More -->
              <div class="mt-3 mb-3">
                <NuxtLink to="/about" class="btn btn-secondary btn-sm text-white text-uppercase px-4 py-2">
                  Selengkapnya ...
                </NuxtLink>
              </div>
              <div class="about-info-wrapper pt-25 pb-20 mt-25">
                <div class="row">
                  <div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                    <div class="about-info-item mb-3">
                      <span class="label">Nama:</span>
                      <span class="value">Hj. Selly Andriany Gantina</span>
                    </div>
                    <div class="about-info-item mb-3">
                      <span class="label">Tempat Tanggal Lahir:</span>
                      <span class="value">Bandung, 20 Desember 1976</span>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                    <div class="about-info-item mb-3">
                      <span class="label">Partai Politik:</span>
                      <span class="value">PDI-P</span>
                    </div>
                    <div class="about-info-item mb-3">
                      <span class="label">Pekerjaan:</span>
                      <span class="value">Politikus</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /about-info-wrapper -->
              <div class="about-footer-content d-sm-flex align-items-center mt-lg-2 mt-sm-4 mt-3">
                <div class="signature pt-12 pr-45">
                  <img :src="signature" alt="" />
                </div>
                <div class="about-footer-content-right mt-20 text-left">
                  <h6 class="d-xl-inline-block text-uppercase pr5 mb-0">
                    SELLY ANDRIANY GANTINA
                  </h6>
                  <span class="openS-font-family meta-text-color">Anggota Dewan Perwakilan Rakyat RI 2024-2029.</span>
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
  import {
    useAboutStore
  } from '~/stores/about'
  import {
    cleanText
  } from '~/utils/stripHtml'

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
    // Jika ada image_url dari API dan tidak null, gunakan itu (ini adalah Storage URL)
    if (aboutData.value?.image_url) {
      return aboutData.value.image_url
    }
    
    // Jika ada image field tapi image_url null (file tidak ada), gunakan default
    if (aboutData.value?.image && !aboutData.value?.image_url) {
      console.warn('Image file not found in storage:', aboutData.value.image)
      return '/images/about/about-img.jpg'
    }
    
    // Fallback ke default image
    return '/images/about/about-img.jpg'
  })

  // Functions
  const {
    $api
  } = useNuxtApp()

  const getImageUrl = (imagePath) => {
    // Jika imagePath undefined atau null, langsung return default
    if (!imagePath) {
      return '/images/about/about-img.jpg'
    }

    // Jika image path sudah full URL (Storage URL)
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath
    }

    // Jika image path dimulai dengan slash, gunakan sebagai path relatif
    if (imagePath.startsWith('/')) {
      return imagePath
    }

    // Untuk path storage, gunakan Storage URL dari Laravel
    // Ini akan dihandle oleh AboutController yang sudah menggunakan Storage::disk('public')->url()
    return '/images/about/about-img.jpg' // Fallback ke default
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
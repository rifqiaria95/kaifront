<template>
  <div id="about" class="about-area over-hidden">
    <div
      class="about-content-wrapper about-margin mt-170 mb-110 position-relative"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-6 col-md-8 offset-md-0 col-sm-10 col-10">
            <div class="about-img-wrapper position-relative mb-90">
              <div
                class="about-img position-relative z-index11"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="100"
              >
                <div
                  class="about-img-over pl-50 transition5 d-inline-block position-relative"
                >
                  <div
                    class="position-relative z-index11"
                    data-tilt
                    data-tilt-max="10"
                  >
                                      <img
                    class="border-radius10 position-relative z-index11"
                    :src="aboutData?.image_url || '/images/about/about-img.jpg'"
                    :alt="aboutData?.title ? cleanText(aboutData.title) : 'About Image'"
                    @error="handleImageError"
                    @load="handleImageLoad"
                  />
                  <!-- Debug info untuk image -->
                  <div v-if="imageError" class="mt-2 p-2 bg-warning text-dark small">
                    <strong>Image Debug:</strong><br>
                    Image Path: {{ aboutData?.image || 'null' }}<br>
                    Image URL: {{ aboutData?.image_url || 'null' }}<br>
                    <button @click="imageError = false" class="btn btn-sm btn-outline-warning mt-1">
                      Hide Debug
                    </button>
                  </div>
                  </div>

                  <div
                    class="about-shape1 position-absolute"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="800"
                  ></div>
                  <!-- /about-shape1 -->
                  <div
                    class="about-shape2 position-absolute z-index11"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="800"
                  ></div>
                  <!-- /about-shape2 -->
                  <div
                    class="about-download-wrapper position-absolute z-index11"
                  >
                    <img
                      class="download-bg rotate-animation d-inline-block"
                      src="/images/about/download-bg.png"
                      alt="about image 2"
                    />
                    <a href="#" class="cv-download-link transition5">
                      <img
                        class="d-icon d-inline-block position-absolute"
                        src="/images/icon/download-icon.png"
                        alt="about image 3"
                      />
                    </a>
                  </div>
                  <!-- /about-download -->
                </div>
              </div>
              <!-- /about-img -->
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
                <button class="btn btn-sm btn-outline-danger" @click="aboutStore.fetchAboutData()">
                  Coba Lagi
                </button>
              </div>
            </div>

            <!-- Content -->
            <div v-else class="about-content position-relative mb-50">
              <div class="position-relative">
                <div class="title">
                  <span class="theme-color text-uppercase d-block mb-1 mt--5"
                    >About Me</span
                  >
                  <h2 class="mb-30">{{ aboutData?.title ? cleanText(aboutData.title) : 'I Develop System that Works' }}</h2>
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
              <p v-if="aboutData?.subtitle">{{ cleanText(aboutData.subtitle) }}</p>
              <p v-else>Oremque laudantium, totaeaque ipsa quae</p>
              <div class="about-info-wrapper pt-25 pb-20 mt-25">
                <div class="row">
                  <div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                    <ul class="about-info">
                      <li class="d-inline-block pr-50">
                        <p class="jostMedium-font-family mb-6">Name</p>
                        <p class="jostMedium-font-family mb-6">Age</p>
                        <p class="jostMedium-font-family mb-6">Occupation</p>
                      </li>
                      <!-- /li -->
                      <li class="d-inline-block">
                        <p class="mb-6">James Smith</p>
                        <p class="mb-6">29 Years</p>
                        <p class="mb-6">System Engineer</p>
                      </li>
                      <!-- /li -->
                    </ul>
                  </div>
                  <!-- /col -->
                  <div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                    <ul class="about-info">
                      <li class="d-inline-block pr-50">
                        <p class="jostMedium-font-family mb-6">Phone</p>
                        <p class="jostMedium-font-family mb-6">Email</p>
                        <p class="jostMedium-font-family mb-6">Nationality</p>
                      </li>
                      <!-- /li -->
                      <li class="d-inline-block">
                        <p class="mb-6">{{ aboutData?.phone || '+123 456 7890' }}</p>
                        <p class="mb-6">{{ aboutData?.email || 'hello@thames.com' }}</p>
                        <p class="mb-6">{{ aboutData?.address || 'Indonesia' }}</p>
                      </li>
                      <!-- /li -->
                    </ul>
                  </div>
                  <!-- /col -->
                </div>
                <!-- /row -->
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
                    Bruce Wayne
                  </h6>
                  <span class="openS-font-family meta-text-color"
                    >Software Architect, Google Inc.</span
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

      <div class="about-text-style position-absolute d-none d-md-inline-block">
        <span class="d-inline-block section-text-color">Smith</span>
      </div>
      <!-- /intro-feature-text -->
      <div
        class="about-icon position-absolute d-none d-md-inline-block z-index1 zoom-animation"
      >
        <img src="/images/shape/content-shape2.png" alt="about shape 2" />
      </div>
      <!-- /intro-feature-icon -->
    </div>
    <!-- /about-wrapper -->
  </div>
</template>
<script setup>
import { useAboutStore } from '~/stores/about'
import { cleanText } from '~/utils/stripHtml'

// Props
defineProps({
  signature: {
    type: String,
    default: "/images/about/signature.png",
  },
})

// Store
const aboutStore = useAboutStore()

// Computed
const aboutData = computed(() => aboutStore.getAboutData)
const loading = computed(() => aboutStore.isLoading)
const error = computed(() => aboutStore.hasError)

// State untuk image error handling
const imageError = ref(false)

// Functions
const { $api } = useNuxtApp()

const handleImageError = (event) => {
  console.warn('Image failed to load:', event.target.src)
  imageError.value = true
  
  // Coba fallback ke default image jika bukan default image yang gagal
  const img = event.target
  if (!img.src.includes('about-img.jpg')) {
    console.log('Falling back to default image')
    img.src = '/images/about/about-img.jpg'
  } else {
    console.error('Default image also failed to load')
  }
}

const handleImageLoad = (event) => {
  console.log('Image loaded successfully:', event.target.src)
  imageError.value = false
}

// Fetch data saat komponen di-mount
onMounted(async () => {
  if (!aboutData.value) {
    await aboutStore.fetchAboutData()
  }
})
</script>

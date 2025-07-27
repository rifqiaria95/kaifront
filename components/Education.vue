<template>
  <div class="education-area over-hidden">
    <div class="container">
      <div class="row position-relative">
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <!-- Title -->
          <div class="position-relative">
            <div class="title">
              <span class="theme-color text-uppercase d-block mb-1"
                >Education</span
              >
              <h2 class="mb-25">{{ educationData?.title ? cleanText(educationData.title) : 'My Education' }}</h2>
              <p>
                {{ educationData?.subtitle ? cleanText(educationData.subtitle) : 'Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit voluptatem accusantium dolore.' }}
              </p>
            </div>
            <!-- /title -->
          </div>
          <!-- Education wrapper -->
          <div class="education-wrapper mr-20 pt-25 mb-50">
            <!-- Education content -->
            <ul class="education-content">
              <li
                v-for="(item, idx) in educationData && Array.isArray(educationData) ? educationData : (educationData ? [educationData] : [])"
                :key="item.id || idx"
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
                  <h3 class="mb-2">{{ item?.institution ? cleanText(item.institution) : 'Masters in Computer Science' }}</h3>
                  <h4>
                    {{ item?.year ? cleanText(item.year) : 'New York University' }}
                  </h4>
                  <p class="mb-0 mt-15">
                    {{ item?.description ? cleanText(item.description) : 'Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.' }}
                  </p>
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
              :alt="educationData?.title ? cleanText(educationData.title) : 'Education Image'"
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
    default: "/images/education/education-img.jpg",
  },
})

// Store
const educationStore = useEducationStore()

// State untuk image error handling
const imageError = ref(false)

// Computed
const educationData = computed(() => educationStore.getEducationData)
const loading = computed(() => educationStore.isLoading)
const error = computed(() => educationStore.hasError)

// Computed untuk image URL
const imageUrl = computed(() => {
  return getImageUrl(educationData.value?.image)
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
  if (!educationData.value) {
    await educationStore.fetchEducationData()
  }
})
</script>

<template>
  <div class="testimonial-area position-relative over-hidden">
    <div class="container">
      <div class="testimonial-bg section-bg pt-170 pb-170 position-relative">
        <div class="row align-items-start justify-content-center">
          <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
            <div class="position-relative">
              <div class="title">
                <span class="theme-color text-uppercase d-block mb-6"
                  >Apa Kata Mereka</span
                >
                <h2 class="mb-20">Testimoni</h2>
              </div>
              <!-- /title -->
            </div>
            <div class="testimonial-wrapper position-relative mt-40 pb-50">
              <div class="quit d-inline-block position-absolute left-0">
                <img class="theme-color" :src="testimonialIcon" alt="quote" />
              </div>
              <div class="testimonial-active pl-80 pr-90">
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
                    <i class="fas fa-exclamation-triangle me-2"></i>
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
                    :navigation="false"
                    :pagination="{ clickable: true }"
                    :slides-per-view="1"
                    :loop="true"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                  >
                    <SwiperSlide v-for="testimoni in testimoniStore.getTestimoniData" :key="testimoni.id">
                      <div class="testimonial-content">
                        <blockquote
                          class="testimonial-text position-relative mb-0 font-italic openS-font-family text-color"
                          v-html="testimoni.testimoni"
                        >
                        </blockquote>
                        <div class="testi-info d-flex align-items-center mt-40">
                          <div class="testi-avatar mr-25">
                            <img
                              class="rounded-circle"
                              :src="getImageUrl(testimoni.gambar)"
                              :alt="`${testimoni.nama} testimoni`"
                              @error="handleImageError"
                              style="width: 60px; height: 60px; object-fit: cover;"
                            />
                          </div>
                          <!-- /testi-avatar -->
                          <div class="avatar-info">
                            <h5 class="mb-1 text-capitalize">{{ testimoni.nama }}</h5>
                            <p class="meta-text-color mb-0">{{ testimoni.instansi }}</p>
                          </div>
                        </div>
                      </div>
                      <!-- /testimonial-content -->
                    </SwiperSlide>
                  </Swiper>
                </client-only>

                <!-- Empty state -->
                <div v-else class="text-center py-5">
                  <div class="alert alert-info" role="alert">
                    <i class="fas fa-info-circle me-2"></i>
                    Belum ada testimoni yang tersedia.
                  </div>
                </div>

                <div
                  class="slick-dots t-dot d-flex gap-5 pl-80 pr-90 mt-5"
                ></div>
              </div>
            </div>
            <!-- /testimonial-wrapper -->
          </div>
          <!-- /col -->
          <div class="col-xl-5 col-lg-5 col-md-12 col-sm-11 col-12">
            <div
              class="testimonial-img position-relative z-index1"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img
                class="border-radius10"
                :class="`${imgGrayScale ? 'img-grayscale' : ''}`"
                src="/images/testimonial/testimoni.jpg"
                alt="author image "
              />
            </div>
            <!-- /testimonial-img -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->

        <div
          v-if="!classic"
          class="intro-feature-text-style testimonial-text-style position-absolute d-none d-md-inline-block"
        >
          <span class="d-inline-block">Testim</span>
        </div>
        <!-- /intro-feature-text -->
      </div>
      <!-- /testimonial-bg -->
    </div>
    <!-- /container -->
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTestimoniStore } from "@/stores/testimoni";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const testimoniStore = useTestimoniStore();
    const { $api } = useNuxtApp();

    // Fetch data testimoni saat komponen dimount
    testimoniStore.fetchTestimoniData();

    const onSwiper = (swiper) => {
      console.log('Swiper initialized:', swiper);
    };
    
    const onSlideChange = () => {
      console.log("slide change");
    };

    // Helper function untuk mendapatkan URL gambar
    const getImageUrl = (imagePath) => {
      if ($api && $api.getImageUrl) {
        return $api.getImageUrl(imagePath);
      }
      
      // Fallback jika $api tidak tersedia
      if (!imagePath) {
        return '/images/testimonial/author-img.jpg';
      }
      
      if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath;
      }
      
      return `http://localhost:8000/api/images/${imagePath}`;
    };

    // Handle image error
    const handleImageError = (event) => {
      event.target.src = '/images/testimonial/author-img.jpg';
    };

    return {
      testimoniStore,
      onSwiper,
      onSlideChange,
      getImageUrl,
      handleImageError,
    };
  },
  props: {
    testimonialIcon: {
      type: String,
      default: "/images/testimonial/testimonial-icon.png",
    },
    classic: {
      type: Boolean,
      default: false,
    },
    imgGrayScale: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.testimonial-text {
  font-size: 18px;
  line-height: 1.6;
  color: #666;
}

.testi-avatar img {
  border: 3px solid #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.avatar-info h5 {
  font-weight: 600;
  color: #333;
}

.avatar-info p {
  font-size: 14px;
  color: #888;
}

/* Loading spinner styles */
.spinner-border {
  width: 3rem;
  height: 3rem;
}

/* Alert styles */
.alert {
  border-radius: 8px;
  border: none;
}

.alert-warning {
  background-color: #fff3cd;
  color: #856404;
}

.alert-info {
  background-color: #d1ecf1;
  color: #0c5460;
}
</style>

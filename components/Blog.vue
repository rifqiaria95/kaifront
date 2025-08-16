<template>
  <div id="blog" class="blog-area over-hidden" :class="bg">
    <div class="marquee-w mb-45" v-if="!classic">
      <div class="marquee">
        <span class="pl-4">Senior Website Developer from New York *</span>
        <span class="pl-4">Senior Website Developer from New York *</span>
      </div>
    </div>
    <!-- /marquee -->

    <div class="blog-wrappers section-bg pt-160 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="title">
              <span class="theme-color text-uppercase d-block mb-6"
                >Dapatkan Pembaruan</span
              >
              <h2>Berita Terkini</h2>
            </div>
            <!-- /title -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
        
        <!-- Loading State -->
        <div v-if="newsStore.isLoading" class="row justify-content-center mt-75">
          <div class="col-12 text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">Memuat berita...</p>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="newsStore.hasError" class="row justify-content-center mt-75">
          <div class="col-12 text-center">
            <div class="alert alert-danger" role="alert">
              {{ newsStore.hasError }}
            </div>
            <button @click="fetchNews" class="btn btn-primary mt-3">
              Coba Lagi
            </button>
          </div>
        </div>

        <!-- News Content -->
        <client-only v-else-if="newsData">
          <Swiper
            :autoplay="{ delay: 1000, disableOnInteraction: true }"
            :navigation="false"
            :pagination="{ clickable: true }"
            :slides-per-view="3"
            :loop="true"
            class="row justify-content-center blog-wrapper blog-active mt-75"
          >
            <SwiperSlide
              class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
              v-for="(item, index) in newsData"
              :key="index"
            >
              <div class="single-blog mb-50 shadow-hover transition3">
                <div class="blog-img">
                  <img
                    class="w-100 img transition5 blog-thumbnail"
                    :src="getImageUrl(item.image)"
                    :alt="item.title"
                    @error="handleImageError"
                  />
                </div>
                <div
                  :class="itemBg"
                  class="single-blog-content pl-30 pt-25 pb-15 pr-30"
                >
                  <ul class="blog-meta">
                    <li class="mr-15 d-inline-block">
                      <span class="theme-color d-inline-block mr-1"
                        ><i class="fas fa-folder"></i
                      ></span>
                      <span
                        class="meta-text-color openS-font-family d-inline-block"
                        >{{ item.year || 'News' }}</span
                      >
                    </li>
                    <li class="mr-15 d-inline-block">
                      <span class="theme-color d-inline-block mr-1"
                        ><i class="fas fa-calendar"></i
                      ></span>
                      <span
                        class="meta-text-color openS-font-family d-inline-block"
                        >{{ formatDate(item.created_at) }}</span
                      >
                    </li>
                  </ul>
                  <!-- /blog-meta -->
                  <h3 class="mb-10 mt-1">
                    <a
                      class="primary-hover"
                      href="#"
                      @click.prevent="activeItem(item)"
                      >{{ item.title }}</a
                    >
                  </h3>
                  <p v-if="item.subtitle" class="text-muted mb-3 news-excerpt">
                    {{ truncateText(item.subtitle, 150) }}
                  </p>
                  <div class="read-more-link">
                    <a 
                      href="#" 
                      @click.prevent="activeItem(item)"
                      class="theme-color text-decoration-none font-weight-bold"
                    >
                      Read More <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              <!-- /single-blog -->
            </SwiperSlide>
            <!-- /col -->
          </Swiper>
        </client-only>

        <!-- No Data State -->
        <div v-else class="row justify-content-center mt-75">
          <div class="col-12 text-center">
            <p class="text-muted">Tidak ada berita tersedia saat ini.</p>
          </div>
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /blog-wrapper -->
  </div>
  <BlogModal v-if="toggle" :item="item" :toggle="toggle" @close="close()" />
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  props: {
    bg: {
      type: String,
      default: "",
    },
    itemBg: {
      type: String,
      default: "bg-white",
    },
    classic: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toggle: false,
      item: null,
      newsData: [],
      expandedStates: [], // New state to track expanded/collapsed for each item
    };
  },
  computed: {
    newsStore() {
      return useNewsStore();
    },
  },
  async mounted() {
    await this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        await this.newsStore.fetchNewsData();
        
        // Use the news data array directly from the store
        this.newsData = this.newsStore.getNewsData;
        // Initialize expanded states for all news items
        this.expandedStates = new Array(this.newsData.length).fill(false);
      } catch (error) {
        console.error('Blog: Error fetching news:', error);
      }
    },
    
    getImageUrl(imagePath) {
      const { $api } = useNuxtApp();
      return $api.getImageUrl(imagePath);
    },
    
    handleImageError(event) {
      // Fallback to default image if the image fails to load
      event.target.src = '/images/blog/blog-img1.jpg';
    },
    
    formatDate(dateString) {
      if (!dateString) return '';
      
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      } catch (error) {
        return dateString;
      }
    },
    
    truncateText(text, maxLength) {
      if (!text) return '';
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + '...';
    },

    shouldShowReadMore(description) {
      if (!description) return false;
      
      // Hapus HTML tags untuk menghitung panjang teks asli
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = description;
      const textContent = tempDiv.textContent || tempDiv.innerText || '';
      
      // Perkiraan jumlah karakter untuk 3 baris (sekitar 150-180 karakter)
      const estimatedCharsPerLine = 50;
      const maxChars = estimatedCharsPerLine * 3;
      
      return textContent.length > maxChars;
    },

    toggleDescription(index) {
      this.expandedStates[index] = !this.expandedStates[index];
    },
    
    activeItem(item) {
      this.toggle = true;
      this.item = item;
      document.querySelector("body").classList.add("modal-open");
    },
    
    close() {
      this.toggle = false;
      document.querySelector("body").classList.remove("modal-open");
    },
  },
};
</script>

<style scoped>
/* Ensure blog thumbnails are displayed in landscape format */
.blog-thumbnail {
  aspect-ratio: 16/9;
  object-fit: cover;
  width: 100%;
  height: 200px; /* Fixed height for consistent landscape appearance */
  min-height: 200px;
}

/* Fallback for browsers that don't support aspect-ratio */
@supports not (aspect-ratio: 16/9) {
  .blog-thumbnail {
    height: 200px;
    width: 100%;
  }
}

/* Ensure the blog image container maintains proper dimensions */
.blog-img {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.blog-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Loading state for images */
.blog-img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  z-index: 1;
}

.blog-img img {
  position: relative;
  z-index: 2;
}

/* News excerpt styling */
.news-excerpt {
  font-size: 14px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.news-content-preview {
  font-size: 13px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Read more link styling */
.read-more-link {
  margin-top: 10px;
}

.read-more-link a {
  font-size: 14px;
  transition: all 0.3s ease;
}

.read-more-link a:hover {
  opacity: 0.8;
  transform: translateX(3px);
}

.read-more-link i {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.read-more-link a:hover i {
  transform: translateX(3px);
}

/* Description text styling for blog */
.description-text {
  line-height: 1.6;
  max-height: 4.8em; /* 3 baris dengan line-height 1.6 */
  overflow: hidden;
  transition: max-height 0.3s ease;
  position: relative;
}

.description-text.expanded {
  max-height: none;
}

/* Styling untuk paragraf di dalam description-text */
.description-text p {
  margin-bottom: 0.75rem;
  line-height: 1.6;
  font-size: 13px;
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

/* Read more button styling for blog */
.read-more-btn {
  color: #000;
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
  border: 1px solid #6c757d;
  background: transparent;
}

.read-more-btn:hover {
  color: #fff;
  background-color: #6c757d;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

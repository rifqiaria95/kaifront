<template>
  <div id="galeri" class="portfolio-area over-hidden pt-155 pb-140">
    <div class="portfolio-wrapper position-relative">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="title text-center mb-65">
              <span class="theme-color f-700 text-uppercase d-block mb-6"
                >Dokumentasi Kegiatan Saya</span
              >
              <h2 class="text-uppercase">Galeri</h2>
            </div>
            <!-- /title -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
            <div class="port-button mb-50 portfolio-menu">
              <button data-filter="*" class="active">Semua</button>
              <button 
                v-for="kategori in categories" 
                :key="kategori.id"
                :data-filter="`.${kategori.css_class}`"
              >
                {{ kategori.name }}
              </button>
            </div>
            <!-- /portfolio-menu -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->

        <!-- Loading State -->
        <div v-if="loading" class="row">
          <div class="col-12 text-center">
            <div class="loading-spinner py-5">
              <i class="fas fa-spinner fa-spin fa-2x theme-color"></i>
              <p class="mt-3">Memuat galeri...</p>
            </div>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="row">
          <div class="col-12 text-center">
            <div class="error-message py-5">
              <i class="fas fa-exclamation-triangle fa-2x text-warning"></i>
              <p class="mt-3 text-danger">{{ error }}</p>
              <button class="btn btn-primary mt-3" @click="loadGaleriData()">
                Coba Lagi
              </button>
            </div>
          </div>
        </div>

        <!-- Galeri Content -->
        <ClientOnly v-else>
          <div v-if="items.length > 0" class="row portfolio grid">
            <div
              v-for="(item, index) in items"
              :key="item.id || index"
              class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item"
              :class="item.categoryCls"
            >
              <div class="single-portfolio position-relative over-hidden mb-24">
                <div class="galeri-image-wrapper" :class="{ loading: item.loading }">
                  <img 
                    class="galeri-image" 
                    :src="item.img" 
                    :alt="item.title || 'Galeri Image'"
                    @error="handleImageError($event, item)"
                    @load="handleImageLoad($event, item)"
                    @loadstart="handleImageLoadStart($event, item)"
                  />
                </div>
                <div
                  class="port-content text-center position-absolute transition5 z-index11"
                  @click="activeItem(item)"
                >
                  <span class="theme-color d-inline-block"
                    ><i class="far fa-external-link-alt"></i>
                  </span>
                </div>
                <!-- /port-content -->
                <div
                  class="port-over-content position-absolute left-0 pl-40 pr-40 pb-30 pt-40 z-index11"
                >
                  <span class="text-white f-600 mb-2 d-block text-uppercase">{{
                    item.category
                  }}</span>
                  <h3 class="text-white">
                    {{ item.title }}
                  </h3>
                </div>
              </div>
              <!-- /single-prot -->
            </div>
          </div>
          
          <!-- Empty State -->
          <div v-else class="row">
            <div class="col-12 text-center">
              <div class="empty-state py-5">
                <i class="fas fa-images fa-3x text-muted"></i>
                <p class="mt-3 text-muted">Belum ada data galeri tersedia</p>
              </div>
            </div>
          </div>
          
          <template #fallback>
            <div class="row">
              <div class="col-12 text-center">
                <div class="loading-spinner py-5">
                  <i class="fas fa-spinner fa-spin fa-2x theme-color"></i>
                  <p class="mt-3">Memuat galeri...</p>
                </div>
              </div>
            </div>
          </template>
        </ClientOnly>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /portfolio-wrapper -->
  </div>
  <GaleriModal
    v-if="toggle"
    :item="item"
    :toggle="toggle"
    @close="close()"
    :imgGrayScale="true"
  />
</template>

<script>
export default {
  async mounted() {
    // Load data kategori dan galeri dari API
    await Promise.all([
      this.loadKategoriData(),
      this.loadGaleriData()
    ]);
    
    // Initialize Isotope setelah data dimuat
    this.initializeIsotope();
  },
  beforeUnmount() {
    // Cleanup Isotope instance
    if (this.isotopeInstance) {
      this.isotopeInstance.destroy();
      this.isotopeInstance = null;
    }
    
    // Cleanup event listeners untuk menghindari konflik
    const filtersElem = document.querySelector(".portfolio-menu");
    if (filtersElem) {
      // Clone element untuk remove semua event listeners
      const newElement = filtersElem.cloneNode(true);
      filtersElem.parentNode.replaceChild(newElement, filtersElem);
    }
  },
  data() {
    return {
      items: [],
      categories: [],
      loading: false,
      error: null,
      toggle: false,
      item: null,
      isotopeInstance: null,
    };
  },
  methods: {
    initializeIsotope() {
      if (process.client) {
        this.$nextTick(() => {
          setTimeout(() => {
            // Wait for Isotope to be loaded
            const waitForIsotope = () => {
              if (window.Isotope) {
                // init Isotope
                this.isotopeInstance = new window.Isotope(".grid", {
                  itemSelector: ".grid-item",
                });
                
                // bind filter button click
                var filtersElem = document.querySelector(".portfolio-menu");
                if (filtersElem) {
                  const self = this;
                  filtersElem.addEventListener("click", function (event) {
                    // Check if target is a button
                    if (event.target.tagName === 'BUTTON' && event.target.hasAttribute('data-filter')) {
                      var filterValue = event.target.getAttribute("data-filter");
                      self.isotopeInstance.arrange({ filter: filterValue });
                    }
                  });

                  // change is-checked class on buttons
                  var buttonGroups = document.querySelectorAll(".portfolio-menu");
                  for (var i = 0, len = buttonGroups.length; i < len; i++) {
                    var buttonGroup = buttonGroups[i];
                    self.radioButtonGroup(buttonGroup);
                  }
                }
              } else {
                // Retry after 100ms if Isotope is not yet loaded
                setTimeout(waitForIsotope, 100);
              }
            };
            waitForIsotope();
          }, 1500);
        });
      }
    },
    
    radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        if (event.target.tagName === 'BUTTON') {
          // Remove active class from all buttons
          var buttons = buttonGroup.querySelectorAll("button");
          buttons.forEach(function(btn) {
            btn.classList.remove("active");
          });
          // Add active class to clicked button
          event.target.classList.add("active");
        }
      });
    },
    
    async loadKategoriData() {
      try {
        const { $api } = useNuxtApp();
        
        // Fetch data kategori galeri dari API
        const response = await $fetch($api.kategoriGaleri(), {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        
        if (response && Array.isArray(response)) {
          this.categories = response;
        } else {
          console.warn('Data kategori galeri kosong atau format tidak valid');
          this.categories = [];
        }
      } catch (error) {
        console.error('Error loading kategori galeri data:', error);
        // Fallback ke kategori default jika ada error
        this.categories = this.getDefaultCategories();
      }
    },
    
    async loadGaleriData() {
      this.loading = true;
      this.error = null;
      
      try {
        const { $api } = useNuxtApp();
        
        // Fetch data galeri dari API
        const response = await $fetch($api.galeri(), {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        
        if (response && Array.isArray(response)) {
          // Transform API data ke format yang dibutuhkan komponen
          this.items = response.map(item => {
            // Prioritas: image_url dari API > fallback default
            const imageUrl = item.image_url || this.getDefaultImage();
            
            return {
              id: item.id,
              title: item.title || 'Untitled',
              category: item.kategori_galeri?.name || 'Uncategorized',
              img: imageUrl,
              largeImage: imageUrl,
              categoryCls: this.getCategoryClass(item.kategori_galeri?.name),
              subtitle: item.subtitle,
              description: item.description,
              created_at: item.created_at,
              // Pertahankan data kategori_galeri untuk modal
              kategori_galeri: item.kategori_galeri,
              // Debug info
              original_image: item.image,
              api_image_url: item.image_url,
              // Loading state
              loading: true
            };
          });
        } else {
          console.warn('Data galeri kosong atau format tidak valid');
          this.items = [];
        }
      } catch (error) {
        console.error('Error loading galeri data:', error);
        this.error = 'Gagal memuat data galeri';
        // Fallback ke data default jika ada error
        this.items = this.getDefaultItems();
      } finally {
        this.loading = false;
      }
    },
    
    getCategoryClass(categoryName) {
      if (!categoryName) return 'design';
      
      const category = categoryName.toLowerCase();
      if (category.includes('web') || category.includes('design')) {
        return 'design';
      } else if (category.includes('development') || category.includes('dev')) {
        return 'dev';
      } else if (category.includes('photography') || category.includes('photo')) {
        return 'photography';
      } else {
        return 'design'; // default
      }
    },
    
    getDefaultImage() {
      return '/images/index-4/portfolio/portfolio-img1.jpg';
    },
    
    getDefaultCategories() {
      return [
        { id: 1, name: "Web Design", css_class: "design" },
        { id: 2, name: "Development", css_class: "dev" },
        { id: 3, name: "Photography", css_class: "photography" }
      ];
    },
    
    getDefaultItems() {
      return [
        {
          id: 1,
          title: "Software Design for codeefly",
          category: "web design",
          img: "/images/index-4/portfolio/portfolio-img1.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img1.jpg",
          categoryCls: "dev photography",
          kategori_galeri: { id: 1, name: "Web Design" },
          loading: true
        },
        {
          id: 2,
          title: "Website Development for ABC Corporation",
          category: "Development",
          img: "/images/index-4/portfolio/portfolio-img2.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img2.jpg",
          categoryCls: "dev design",
          kategori_galeri: { id: 2, name: "Development" },
          loading: true
        },
        {
          id: 3,
          title: "Branding for Easy Computers",
          category: "Branding",
          img: "/images/index-4/portfolio/portfolio-img3.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img3.jpg",
          categoryCls: "photography",
          kategori_galeri: { id: 3, name: "Photography" },
          loading: true
        }
      ];
    },
    
    activeItem(item) {
      this.toggle = true;
      this.item = item;
      document.querySelector("body").classList.add("modal-open");
      
      // Debug: Log item data for modal
      console.log('Modal item data:', item);
      console.log('Kategori galeri:', item.kategori_galeri);
      console.log('Image debug:', {
        img: item.img,
        original_image: item.original_image,
        api_image_url: item.api_image_url
      });
    },
    
    close() {
      this.toggle = false;
      document.querySelector("body").classList.remove("modal-open");
    },
    
    handleImageError(event, item) {
      // Fallback ke gambar default jika gambar tidak bisa dimuat
      const img = event.target;
      const defaultImage = this.getDefaultImage();
      
      // Set loading to false
      item.loading = false;
      
      // Jika gambar yang gagal bukan default image
      if (!img.src.includes('portfolio-img1.jpg')) {
        img.src = defaultImage;
        console.warn('Failed to load image for item:', item.title, 'Fallback to default');
      } else {
        console.error('Default image also failed to load for item:', item.title);
      }
    },
    
    handleImageLoad(event, item) {
      // Image loaded successfully
      item.loading = false;
      // console.log('Image loaded successfully for item:', item.title);
    },
    
    handleImageLoadStart(event, item) {
      // Image started loading
      item.loading = true;
    },
  },
};
</script>

<style scoped>
/* Galeri Image Styling - Fixed size with proportional scaling */
.galeri-image-wrapper {
  width: 426px;
  height: 234px;
  overflow: hidden;
  position: relative;
  background-color: #f8f9fa;
  border-radius: 10px;
}

.galeri-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  display: block;
}

/* Hover effect */
.single-portfolio:hover .galeri-image {
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .galeri-image-wrapper {
    border-radius: 10px;
    width: 100%;
    height: 200px;
    max-width: 426px;
    margin: 0 auto;
  }
}

@media (max-width: 576px) {
  .galeri-image-wrapper {
    height: 180px;
  }
}

/* Grayscale effect yang sudah ada */
.galeri-image {
  filter: grayscale(100%);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.single-portfolio:hover .galeri-image {
  filter: grayscale(0%);
}

/* Loading placeholder */
.galeri-image-wrapper::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.galeri-image-wrapper.loading::before {
  opacity: 1;
}

@keyframes spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>

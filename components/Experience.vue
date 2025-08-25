<template>
  <div id="pengalaman" class="experience-area over-hidden pb-165">
    <div class="experience-wrapper extra-width position-relative">
      <div
        class="experience-bg-img left-0 top-0 bottom-0 bg-cover no-repeat w-50 position-absolute"
        data-background="/images/work/experience.JPG"
      ></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-none">
            <div
              class="experience-img"
              data-aos="fade-right"
              data-aos-duration="2000"
            ></div>
            <!-- /experience-img -->
          </div>
          <!-- /col -->
          <div class="col-xl-6 col-lg-6 offset-lg-6 col-md-12 col-sm-12 col-12">
            <div class="experience-margin mt-160 pb-80 pl-100 mb-50">
              <div class="position-relative">
                <div class="title">
                  <span class="theme-color text-uppercase d-block mb-6 mt--5"
                    >Pengalaman</span
                  >
                  <h2 class="mb-25">Pengalaman Saya</h2>
                  <p>
                    Berikut adalah pengalaman saya di dunia politik yang telah saya jalani selama bertahun-tahun.
                  </p>
                </div>
                <!-- /title -->
              </div>
              
              <!-- Loading State -->
              <div v-if="loading" class="experience-wrapper pt-25 text-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <p class="mt-3">Memuat data experience...</p>
              </div>

              <!-- Error State -->
              <div v-else-if="error" class="experience-wrapper pt-25">
                <div class="alert alert-danger" role="alert">
                  <h4 class="alert-heading">Error!</h4>
                  <p>{{ error }}</p>
                  <div class="mt-3">
                    <button class="btn btn-sm btn-outline-danger me-2" @click="experienceStore.fetchExperienceData()">
                      Coba Lagi
                    </button>
                    <button class="btn btn-sm btn-outline-secondary" @click="experienceStore.clearError()">
                      Tutup Error
                    </button>
                  </div>
                </div>
              </div>

              <!-- Experience Content -->
              <div v-else class="experience-wrapper pt-25">
                <ul class="experience-content">
                  <li 
                    v-for="(experience, index) in experienceData" 
                    :key="experience.id"
                    class="mb-32 d-flex align-items-start rotate-hover"
                  >
                    <div
                      class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"
                    >
                      <span class="theme-color d-inline-block">
                        <span
                          class="d-block rotate flat-family flaticon-briefcase"
                        ></span>
                      </span>
                    </div>
                    <!-- /experience-ser-icon -->
                    <div class="experience-service-text d-inline-block">
                      <h3 class="mb-2">{{ cleanText(experience.title) }}</h3>
                      <h4>
                        {{ cleanText(experience.company) }}
                        <span class="meta-text-color openS-font-family">
                          ( {{ experience.year }} )</span
                        >
                      </h4>
                      <div class="description-container">
                        <div 
                          class="mb-0 mt-15 description-text"
                          :class="{ 'expanded': expandedStates[index] }"
                          v-html="experience.description"
                        ></div>
                        <button 
                          v-if="shouldShowReadMore(experience.description)"
                          class="btn btn-sm btn-outline-secondary mt-3 read-more-btn"
                          @click="toggleDescription(index)"
                        >
                          {{ expandedStates[index] ? 'Sembunyikan' : 'Baca Selengkapnya' }}
                        </button>
                      </div>
                    </div>
                  </li>
                  
                  <!-- Fallback content jika tidak ada data -->
                  <li v-if="experienceData.length === 0" class="mb-32 d-flex align-items-start rotate-hover">
                    <div
                      class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"
                    >
                      <span class="theme-color d-inline-block">
                        <span
                          class="d-block rotate flat-family flaticon-briefcase"
                        ></span>
                      </span>
                    </div>
                    <!-- /experience-ser-icon -->
                    <div class="experience-service-text d-inline-block">
                      <h3 class="mb-2">Senior System Engineer</h3>
                      <h4>
                        codeefly
                        <span class="meta-text-color openS-font-family">
                          ( 2018 - Running )</span
                        >
                      </h4>
                      <div class="description-container">
                        <p 
                          class="mb-0 mt-15 description-text"
                          :class="{ 'expanded': fallbackExpanded }"
                        >
                          Ludantium totam rem aperia meaque ipsa quae ab illo
                          inven tore veritatis et quasi architecto beatae et vitae
                          ullam molesti quae quasi.
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
              <!-- /experience-wrapper -->
            </div>
            <!-- /experience-margin -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /experience-wrapper -->
  </div>
</template>

<script setup>
  import { useExperienceStore } from '~/stores/experience'
  import { cleanText } from '~/utils/stripHtml'

  // Store
  const experienceStore = useExperienceStore()

  // State untuk expanded description
  const expandedStates = ref({})
  const fallbackExpanded = ref(false)

  // Computed
  const experienceData = computed(() => experienceStore.getExperienceData)
  const loading = computed(() => experienceStore.isLoading)
  const error = computed(() => experienceStore.hasError)

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
    if (experienceData.value.length === 0) {
      await experienceStore.fetchExperienceData()
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
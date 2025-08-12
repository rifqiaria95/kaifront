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
                    v-for="experience in experienceData" 
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
                      <p class="mb-0 mt-15">
                        {{ cleanText(experience.description) }}
                      </p>
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
                      <p class="mb-0 mt-15">
                        Ludantium totam rem aperia meaque ipsa quae ab illo
                        inven tore veritatis et quasi architecto beatae et vitae
                        ullam molesti quae quasi.
                      </p>
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

  // Computed
  const experienceData = computed(() => experienceStore.getExperienceData)
  const loading = computed(() => experienceStore.isLoading)
  const error = computed(() => experienceStore.hasError)

  // Fetch data saat komponen di-mount
  onMounted(async () => {
    if (experienceData.value.length === 0) {
      await experienceStore.fetchExperienceData()
    }
  })
</script>

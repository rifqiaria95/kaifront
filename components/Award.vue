<template>
  <div
    class="award-area over-hidden position-relative z-index11 pt-160 pb-170"
    :class="bg"
  >
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="title text-center">
            <span class="theme-color text-uppercase d-block mb-6"
              >Kegiatan</span
            >
            <h2>Organisasi</h2>
          </div>
          <!-- /title -->
        </div>
        <!-- /col -->
      </div>
      <!-- /row -->
      
      <!-- Loading State -->
      <div v-if="organisasiStore.isLoading" class="text-center mt-70">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3">Memuat data organisasi...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="organisasiStore.hasError" class="text-center mt-70">
        <div class="alert alert-danger" role="alert">
          {{ organisasiStore.hasError }}
          <button @click="retryFetch" class="btn btn-outline-danger ms-3">
            Coba Lagi
          </button>
        </div>
      </div>

      <!-- Data Display -->
      <div v-else-if="organisasiStore.getOrganisasiData.length > 0" class="award-wrapper mt-70">
        <div
          class="row align-items-start theme-border-top theme-border-bottom award-margin pt-40 pb-35"
          v-for="item in organisasiStore.getOrganisasiData"
          :key="item.id"
        >
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-11 col-12">
            <div class="award-logo mt-10 mb-20">
              <a href="#" class="d-block">
                <img 
                  :src="getImageUrl(item)" 
                  :alt="`${item.nama} logo`"
                  class="img-fluid"
                  style="max-width: 100px; height: auto;"
                />
              </a>
            </div>
            <!-- /award-logo -->
          </div>
          <!-- /col -->
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-11 col-12">
            <div class="award-content">
              <h3 class="mb-10">{{ item.jabatan }}</h3>
              <p class="meta-text-color">{{ item.tahun }}</p>
            </div>
            <!-- /award-content -->
          </div>
          <!-- /col -->
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-11 col-12">
            <div class="award-content">
              <h3 class="mb-10">{{ item.nama }}</h3>
              <p class="meta-text-color">{{ item.lokasi }}</p>
            </div>
            <!-- /award-content -->
          </div>
          <!-- /col -->
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-11 col-12">
            <div class="award-content">
              <p v-html="item.deskripsi">
              </p>
            </div>
            <!-- /award-content -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
      </div>
      <!-- /award-wrapper -->

      <!-- Empty State -->
      <div v-else class="text-center mt-70">
        <div class="alert alert-info" role="alert">
          Belum ada data organisasi yang tersedia.
        </div>
      </div>
    </div>
    <!-- /container -->
  </div>
</template>

<script setup>
import { useOrganisasiStore } from '~/stores/organisasi'

// Props
const props = defineProps({
  bg: {
    type: String,
    default: "",
  },
})

// Store
const organisasiStore = useOrganisasiStore()

// API helper
const { $api } = useNuxtApp()

// Methods
const getImageUrl = (imagePath) => {
  // Jika ada image_url dari API dan tidak null, gunakan itu (ini adalah Storage URL)
  if (imagePath?.image_url) {
    return imagePath.image_url
  }
  
  // Jika ada image field tapi image_url null (file tidak ada), gunakan default
  if (imagePath?.image && !imagePath?.image_url) {
    console.warn('Image file not found in storage:', imagePath.image)
    return '/images/award/award-logo1.png'
  }
  
  // Fallback ke default image
  return '/images/award/award-logo1.png'
}

const retryFetch = () => {
  organisasiStore.clearError()
  organisasiStore.fetchOrganisasiData()
}

// Fetch data on component mount
onMounted(() => {
  if (organisasiStore.getOrganisasiData.length === 0) {
    organisasiStore.fetchOrganisasiData()
  }
})
</script>

<template>
  <div class="pricing-area over-hidden pt-160 pb-140" :class="bg">
    <div class="container">
      <div class="row align-items-start">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="title text-center">
            <span class="theme-color text-uppercase d-block mb-6"
              >Program Yang Sedang Dibuka</span
            >
            <h2>Program</h2>
          </div>
          <!-- /title -->
        </div>
        <!-- /col -->
      </div>
      <!-- /row -->
      <div class="row price-wrapper justify-content-center mt-80">
        <!-- Loading State -->
        <div v-if="programStore.isLoading" class="col-12 text-center">
          <p>Memuat program...</p>
        </div>
        
        <!-- Error State -->
        <div v-else-if="programStore.hasError" class="col-12 text-center">
          <p class="text-danger">{{ programStore.error }}</p>
        </div>
        
        <!-- Empty State -->
        <div v-else-if="programs.length === 0" class="col-12 text-center">
          <p>Tidak ada program yang sedang dibuka saat ini.</p>
        </div>
        
        <!-- Programs List -->
        <div
          v-else
          v-for="(program, index) in programs"
          :key="program.id"
          class="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          :data-aos-duration="1200 + (index * 200)"
        >
          <div
            :class="itemBg"
            class="single-price shadow-hover transition3 border-radius10 pl-45 pr-45 pt-45 pb-50 mb-30"
          >
            <h3 class="theme-border-bottom pb-25">{{ program.name }}</h3>
            <div class="price-list">
              <p class="mb-3" style="font-size: 14px; line-height: 1.5;">
                {{ program.description }}
              </p>
              <div class="program-details">
                <p class="mb-2"><strong>Kuota:</strong> {{ program.kuota }} orang</p>
                <p class="mb-2"><strong>Kategori:</strong> {{ program.kategori }}</p>
                <p class="mb-2"><strong>Periode:</strong> {{ formatDate(program.start_date) }} - {{ formatDate(program.end_date) }}</p>
              </div>
            </div>
            <button
              @click="handleRegister(program)"
              class="btn position-relative over-hidden theme-bg text-uppercase mt-25"
            >
              Daftar Sekarang
            </button>
          </div>
          <!-- / -->
        </div>
        <!-- /col -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
</template>

<script setup>
const props = defineProps({
  itemBg: {
    type: String,
    default: "white-bg",
  },
  bg: {
    type: String,
    default: "",
  },
})

const { isAuthenticated, hasRole } = useAuth()
const programStore = useProgramStore()

// Computed untuk mendapatkan program
const programs = computed(() => programStore.getPrograms)

// Fetch programs saat komponen di-mount
onMounted(async () => {
  await programStore.fetchOpenPrograms()
})

// Format tanggal
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Handle register button click
const handleRegister = (program) => {
  // Cek apakah user sudah login
  if (!isAuthenticated.value) {
    // Redirect ke halaman login
    navigateTo('/login')
    return
  }

  // Cek apakah user memiliki role guest
  if (hasRole('guest')) {
    // Redirect ke halaman registration-program
    navigateTo('http://localhost:8000/registration-program')
    return
  }

  // Jika bukan guest, tampilkan pesan atau redirect ke halaman lain
  alert('Anda tidak memiliki akses untuk mendaftar program ini.')
}
</script>

<style scoped>
.program-details {
  font-size: 14px;
  color: #666;
}

.program-details p {
  margin-bottom: 0.5rem;
}

.program-details strong {
  color: #333;
}

.alert {
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.375rem;
}

.alert-danger {
  color: #dc3545;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}

.text-danger {
  color: #dc3545;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>

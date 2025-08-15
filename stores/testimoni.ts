import { defineStore } from 'pinia'

interface TestimoniData {
  id         : string
  nama       : string
  testimoni  : string
  instansi   : string
  gambar     : string | null  // Ubah dari 'image' ke 'gambar' sesuai backend
  created_by : string
  created_at : string
  updated_at : string
  createdBy  : {
    id   : string
    name : string
  }
}

export const useTestimoniStore = defineStore('testimoni', {
  state: () => ({
    testimoniData: [] as TestimoniData[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getTestimoniData: (state) => state.testimoniData,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },

  actions: {
    async fetchTestimoniData() {
      this.loading = true
      this.error = null
      
      try {
        const { $api } = useNuxtApp()
        
        // Fallback jika $api tidak tersedia
        let apiUrl
        if ($api) {
          apiUrl = $api.testimoni()
        } else {
          apiUrl = 'http://localhost:8000/api/testimoni'
        }
        
        console.log('Fetching testimoni data from:', apiUrl)
        
        const response = await $fetch<TestimoniData[]>(apiUrl, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        
        console.log('Testimoni API Response:', response)
        
        // Validasi response
        if (!response) {
          throw new Error('Response kosong dari server')
        }
        
        // Response adalah array of testimoni data
        if (Array.isArray(response)) {
          console.log('Setting testimoni data:', response)
          this.testimoniData = response
        } else {
          throw new Error('Format response tidak valid')
        }
      } catch (error) {
        console.error('Testimoni fetch error:', error)
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        this.error = `Gagal memuat data testimoni: ${errorMessage}`
      } finally {
        this.loading = false
      }
    },

    clearError() {
      this.error = null
    }
  }
})

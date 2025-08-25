import { defineStore } from 'pinia'

interface GaleriData {
  id         : string
  title      : string
  subtitle   : string
  description: string
  image      : string
  kategori_galeri_id : string
  created_at : string
  updated_at : string
}

export const useGaleriStore = defineStore('galeri', {
  state: () => ({
    galeriData: null as GaleriData | null,
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getGaleriData: (state) => state.galeriData,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },

  actions: {
    async fetchGaleriData() {
      this.loading = true
      this.error = null
      
      try {
        const { $api } = useNuxtApp()
        
        // Fallback jika $api tidak tersedia
        let apiUrl
        if ($api) {
          apiUrl = $api.galeri()
        } else {
          apiUrl = 'http://localhost:8000/api/galeri'
        }
        
        const response = await $fetch<GaleriData[] | GaleriData>(apiUrl, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        
        // Validasi response
        if (!response) {
          throw new Error('Response kosong dari server')
        }
        
        // Jika response adalah array, ambil item pertama
        if (Array.isArray(response) && response.length > 0) {
          this.galeriData = response[0]
        } else if (typeof response === 'object') {
          this.galeriData = response as GaleriData
        } else {
          throw new Error('Format response tidak valid')
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        this.error = `Gagal memuat data galeri: ${errorMessage}`
      } finally {
        this.loading = false
      }
    },

    clearError() {
      this.error = null
    }
  }
})

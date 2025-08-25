import { defineStore } from 'pinia'

interface VisimisiData {
  id         : string
  title      : string
  subtitle   : string
  description: string
  image      : string
  image_url  : string
  created_at : string
  updated_at : string
}

export const useVisimisiStore = defineStore('visimisi', {
  state: () => ({
    visimisiData: null as VisimisiData | null,
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getVisimisiData: (state) => state.visimisiData,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },

  actions: {
    async fetchVisimisiData() {
      this.loading = true
      this.error = null
      
      try {
        const { $api } = useNuxtApp()
        
        // Fallback jika $api tidak tersedia
        let apiUrl
        if ($api) {
          apiUrl = $api.visimisi()
        } else {
          apiUrl = 'http://localhost:8000/api/visimisi'
        }
        
        const response = await $fetch<VisimisiData[] | VisimisiData>(apiUrl, {
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
          this.visimisiData = response[0]
        } else if (typeof response === 'object') {
          this.visimisiData = response as VisimisiData
        } else {
          throw new Error('Format response tidak valid')
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        this.error = `Gagal memuat data visimisi: ${errorMessage}`
      } finally {
        this.loading = false
      }
    },

    clearError() {
      this.error = null
    }
  }
})

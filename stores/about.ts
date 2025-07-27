import { defineStore } from 'pinia'

interface AboutData {
  id         : string
  title      : string
  subtitle   : string
  description: string
  image      : string
  video      : string
  address    : string
  phone      : string
  email      : string
  facebook   : string
  instagram  : string
  twitter    : string
  tiktok     : string
  youtube    : string
  created_at : string
  updated_at : string
}

export const useAboutStore = defineStore('about', {
  state: () => ({
    aboutData: null as AboutData | null,
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getAboutData: (state) => state.aboutData,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },

  actions: {
    async fetchAboutData() {
      this.loading = true
      this.error = null
      
      try {
        const { $api } = useNuxtApp()
        
        // Fallback jika $api tidak tersedia
        let apiUrl
        if ($api) {
          apiUrl = $api.about()
        } else {
          apiUrl = 'http://localhost:8000/api/about'
        }
        
        const response = await $fetch<AboutData[] | AboutData>(apiUrl, {
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
          this.aboutData = response[0]
        } else if (typeof response === 'object') {
          this.aboutData = response as AboutData
        } else {
          throw new Error('Format response tidak valid')
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        this.error = `Gagal memuat data about: ${errorMessage}`
      } finally {
        this.loading = false
      }
    },

    clearError() {
      this.error = null
    }
  }
})

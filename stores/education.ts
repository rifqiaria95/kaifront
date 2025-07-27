import { defineStore } from 'pinia'

interface EducationData {
  id         : string
  title      : string
  subtitle   : string
  description: string
  image      : string
  year       : string
  created_at : string
  updated_at : string
}

export const useEducationStore = defineStore('education', {
  state: () => ({
    educationData: null as EducationData | null,
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getEducationData: (state) => state.educationData,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },

  actions: {
    async fetchEducationData() {
      this.loading = true
      this.error = null
      
      try {
        const { $api } = useNuxtApp()
        
        // Fallback jika $api tidak tersedia
        let apiUrl
        if ($api) {
          apiUrl = $api.education()
        } else {
          apiUrl = 'http://localhost:8000/api/education'
        }
        
        const response = await $fetch<EducationData[] | EducationData>(apiUrl, {
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
          this.educationData = response[0]
        } else if (typeof response === 'object') {
          this.educationData = response as EducationData
        } else {
          throw new Error('Format response tidak valid')
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        this.error = `Gagal memuat data education: ${errorMessage}`
      } finally {
        this.loading = false
      }
    },

    clearError() {
      this.error = null
    }
  }
})

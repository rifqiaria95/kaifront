import { defineStore } from 'pinia'

interface ExperienceData {
  id         : string
  title      : string
  subtitle   : string
  company    : string
  year       : string
  description: string
  image      : string
  image_url  : string
  created_by : string
  created_at : string
  updated_at : string
  createdBy  : {
    id   : string
    name : string
  }
}

export const useExperienceStore = defineStore('experience', {
  state: () => ({
    experienceData: [] as ExperienceData[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getExperienceData: (state) => state.experienceData,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },

  actions: {
    async fetchExperienceData() {
      this.loading = true
      this.error = null
      
      try {
        const { $api } = useNuxtApp()
        
        // Fallback jika $api tidak tersedia
        let apiUrl
        if ($api) {
          apiUrl = $api.experience()
        } else {
          apiUrl = 'http://localhost:8000/api/experience'
        }
        
        const response = await $fetch<ExperienceData[]>(apiUrl, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        
        // Validasi response
        if (!response) {
          throw new Error('Response kosong dari server')
        }
        
        // Response adalah array of experience data
        if (Array.isArray(response)) {
          this.experienceData = response
        } else {
          throw new Error('Format response tidak valid')
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        this.error = `Gagal memuat data experience: ${errorMessage}`
      } finally {
        this.loading = false
      }
    },

    clearError() {
      this.error = null
    }
  }
})

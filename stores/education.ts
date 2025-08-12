import { defineStore } from 'pinia'

interface EducationData {
  id         : string
  title      : string
  subtitle   : string
  institution: string
  year       : string
  description: string
  image      : string | null
  created_by : string
  created_at : string
  updated_at : string
  createdBy  : {
    id   : string
    name : string
  }
}

export const useEducationStore = defineStore('education', {
  state: () => ({
    educationData: [] as EducationData[],
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
        
        console.log('Fetching education data from:', apiUrl)
        
        const response = await $fetch<EducationData[]>(apiUrl, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        
        console.log('Education API Response:', response)
        
        // Validasi response
        if (!response) {
          throw new Error('Response kosong dari server')
        }
        
        // Response adalah array of education data
        if (Array.isArray(response)) {
          console.log('Setting education data:', response)
          this.educationData = response
        } else {
          throw new Error('Format response tidak valid')
        }
      } catch (error) {
        console.error('Education fetch error:', error)
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

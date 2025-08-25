import { defineStore } from 'pinia'

interface OrganisasiData {
  id         : string
  nama       : string
  jabatan    : string
  tahun      : string
  lokasi     : string
  deskripsi  : string
  image      : string | null
  image_url  : string | null
  created_by : string
  created_at : string
  updated_at : string
  createdBy  : {
    id   : string
    name : string
  }
}

export const useOrganisasiStore = defineStore('organisasi', {
  state: () => ({
    organisasiData: [] as OrganisasiData[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getOrganisasiData: (state) => state.organisasiData,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },

  actions: {
    async fetchOrganisasiData() {
      this.loading = true
      this.error = null
      
      try {
        const { $api } = useNuxtApp()
        
        // Fallback jika $api tidak tersedia
        let apiUrl
        if ($api) {
          apiUrl = $api.organisasi()
        } else {
          apiUrl = 'http://localhost:8000/api/organisasi'
        }
        
        console.log('Fetching organisasi data from:', apiUrl)
        
        const response = await $fetch<OrganisasiData[]>(apiUrl, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        
        console.log('Organisasi API Response:', response)
        
        // Validasi response
        if (!response) {
          throw new Error('Response kosong dari server')
        }
        
        // Response adalah array of education data
        if (Array.isArray(response)) {
          console.log('Setting organisasi data:', response)
          this.organisasiData = response
        } else {
          throw new Error('Format response tidak valid')
        }
      } catch (error) {
        console.error('Organisasi fetch error:', error)
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        this.error = `Gagal memuat data organisasi: ${errorMessage}`
      } finally {
        this.loading = false
      }
    },

    clearError() {
      this.error = null
    }
  }
})

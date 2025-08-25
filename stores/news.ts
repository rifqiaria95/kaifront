import { defineStore } from 'pinia'

interface NewsData {
  id         : string
  title      : string
  subtitle   : string
  description: string
  image      : string
  year       : string
  created_at : string
  updated_at : string
}

export const useNewsStore = defineStore('news', {
  state: () => ({
    newsData: [] as NewsData[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getNewsData: (state) => state.newsData,
    getNewsCount: (state) => state.newsData.length,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },

  actions: {
    async fetchNewsData() {
      this.loading = true
      this.error = null
      
      try {
        // Ambil endpoint dari plugin api.client.ts
        const { $api } = useNuxtApp()
        if (!$api || typeof $api.news !== 'function') {
          throw new Error('API endpoint news tidak tersedia dari plugin')
        }

        const apiUrl = $api.news()
        
        const response = await $fetch<NewsData[] | NewsData>(apiUrl, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        
        // Validasi response
        if (!response) {
          throw new Error('Response kosong dari server')
        }
        
        // Handle both array and single object responses
        if (Array.isArray(response)) {
          this.newsData = response
        } else if (typeof response === 'object') {
          // If single object, convert to array
          this.newsData = [response as NewsData]
        } else {
          throw new Error('Format response tidak valid')
        }
      } catch (error) {
        console.error('Error fetching news:', error)
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        this.error = `Gagal memuat data news: ${errorMessage}`
        this.newsData = []
      } finally {
        this.loading = false
      }
    },

    clearError() {
      this.error = null
    },

    // Get single news by ID
    getNewsById(id: string): NewsData | null {
      return this.newsData.find(news => news.id === id) || null
    },

    // Get latest news (first item)
    getLatestNews(): NewsData | null {
      return this.newsData.length > 0 ? this.newsData[0] : null
    }
  }
})

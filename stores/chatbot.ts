import { defineStore } from 'pinia'

export interface Chatbot {
  id: number
  message: string
  createdAt: string
  updatedAt: string
}

// Interface untuk chat conversation
export interface ChatMessage {
  role: 'user' | 'bot'
  message: string
  timestamp: Date
}

interface ChatbotState {
  chatbots: Chatbot[]
  loading: boolean
  totalRecords: number
  showModal: boolean
  isEditMode: boolean
  form: Partial<Chatbot>
  validationErrors: any
  error: string | null
  params: {
    page: number
    rows: number
    sortField?: string
    sortOrder?: number
    filters?: any
  }
  // State untuk chat conversation
  chatMessages: ChatMessage[]
  sessionId: string | null
  isTyping: boolean
  chatLoading: boolean
}

const initialFormState: Partial<Chatbot> = {
  id: undefined,
  message: '',
}

export const useChatbotStore = defineStore('chatbot', {
  state: (): ChatbotState => ({
    chatbots: [],
    loading: false,
    totalRecords: 0,
    showModal: false,
    isEditMode: false,
    form: { ...initialFormState },
    validationErrors: null,
    error: null,
    params: {
      page: 1,
      rows: 10,
    },
    // Chat conversation state
    chatMessages: [],
    sessionId: null,
    isTyping: false,
    chatLoading: false,
  }),
  actions: {
    async fetchChatbots() {
      this.loading = true
      this.error = null
      const { $api } = useNuxtApp()

      try {
        const token = localStorage.getItem('token');

        const url = new URL($api.chatbot())
        url.searchParams.append('page', this.params.page.toString())
        url.searchParams.append('rows', this.params.rows.toString())
        if (this.params.sortField) {
          url.searchParams.append('sortField', this.params.sortField)
          url.searchParams.append('sortOrder', this.params.sortOrder === 1 ? 'asc' : 'desc')
        }
        if (this.params.filters?.global?.value) {
          url.searchParams.append('search', this.params.filters.global.value)
        }

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })
        
        if (!response.ok) throw new Error('Gagal mengambil data chatbot')

        const result = await response.json()
        this.chatbots = result.data
        this.totalRecords = result.meta.total
      } catch (e: any) {
        console.error('Gagal mengambil data chatbot:', e)
        this.error = e.message
      } finally {
        this.loading = false
      }
    },

    async fetchChatbotByPerusahaan(perusahaanId: number) {
        if (!perusahaanId) {
            this.chatbots = []
            return
        }
        this.loading = true
        const { $api } = useNuxtApp()
        const token = localStorage.getItem('token');

        try {
            const response = await fetch($api.chatbot() + `?perusahaan_id=${perusahaanId}`, {
                 method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                },
            })
            const result = await response.json()
            this.chatbots = result.data || []
        } catch (error) {
            console.error('Gagal mengambil data chatbot by perusahaan:', error)
        } finally {
            this.loading = false
        }
    },

    async createChatbot() {
      this.loading = true
      this.validationErrors = null
      const { $api } = useNuxtApp()

      try {
        const token        = localStorage.getItem('token');

        await fetch($api.chatbot(), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
          body: JSON.stringify(this.form),
          credentials: 'include',
        })
        this.closeModal()
        await this.fetchChatbots()
      } catch (error: any) {
        if (error.response && error.response.status === 422) {
          this.validationErrors = error.response._data.errors
        } else {
          console.error('Gagal membuat chatbot:', error)
        }
      } finally {
        this.loading = false
      }
    },

    setPage(page: number, rows: number) {
      this.params.page = page
      this.params.rows = rows
      this.fetchChatbots()
    },

    setSort(sortField: string, sortOrder: number) {
      this.params.sortField = sortField
      this.params.sortOrder = sortOrder
      this.fetchChatbots()
    },
    
    setFilters(filters: any) {
      this.params.filters = filters;
      this.fetchChatbots();
    },

    // Chat conversation actions
    async sendChatMessage(message: string) {
      this.chatLoading = true
      this.isTyping = false
      const { $api } = useNuxtApp()

      try {
        // Tambahkan pesan user ke chat
        this.chatMessages.push({
          role: 'user',
          message: message,
          timestamp: new Date()
        })

        // Tampilkan typing indicator
        this.isTyping = true

        // Kirim request ke backend
        const response = await fetch($api.chat(), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            message: message,
            session_id: this.sessionId
          }),
        })

        if (!response.ok) {
          throw new Error('Gagal mengirim pesan')
        }

        const result = await response.json()
        
        // Set session ID jika belum ada
        if (!this.sessionId) {
          this.sessionId = result.session_id
        }

        // Hilangkan typing indicator
        this.isTyping = false

        // Tambahkan balasan bot ke chat
        this.chatMessages.push({
          role: 'bot',
          message: result.reply,
          timestamp: new Date()
        })

      } catch (error: any) {
        console.error('Gagal mengirim pesan chat:', error)
        this.isTyping = false
        
        // Tambahkan pesan error
        this.chatMessages.push({
          role: 'bot',
          message: 'Maaf, terjadi kesalahan. Silakan coba lagi.',
          timestamp: new Date()
        })
      } finally {
        this.chatLoading = false
      }
    },

    clearChatHistory() {
      this.chatMessages = []
      this.sessionId = null
    },

    setTyping(status: boolean) {
      this.isTyping = status
    },

    // Modal actions
    openModal() {
      this.showModal = true
      this.isEditMode = false
      this.form = { ...initialFormState }
      this.validationErrors = null
    },

    openEditModal(chatbot: Chatbot) {
      this.showModal = true
      this.isEditMode = true
      this.form = { ...chatbot }
      this.validationErrors = null
    },

    closeModal() {
      this.showModal = false
      this.isEditMode = false
      this.form = { ...initialFormState }
      this.validationErrors = null
    },

    async updateChatbot() {
      this.loading = true
      this.validationErrors = null
      const { $api } = useNuxtApp()

      try {
        const token = localStorage.getItem('token');

        await fetch(`${$api.chatbot()}/${this.form.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
          body: JSON.stringify(this.form),
          credentials: 'include',
        })
        this.closeModal()
        await this.fetchChatbots()
      } catch (error: any) {
        if (error.response && error.response.status === 422) {
          this.validationErrors = error.response._data.errors
        } else {
          console.error('Gagal mengupdate chatbot:', error)
        }
      } finally {
        this.loading = false
      }
    },

    async deleteChatbot(id: number) {
      this.loading = true
      const { $api } = useNuxtApp()

      try {
        const token = localStorage.getItem('token');

        await fetch(`${$api.chatbot()}/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
          credentials: 'include',
        })
        await this.fetchChatbots()
      } catch (error: any) {
        console.error('Gagal menghapus chatbot:', error)
      } finally {
        this.loading = false
      }
    }
  },
})

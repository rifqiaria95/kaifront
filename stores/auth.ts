export const useAuthStore = defineStore('auth', {
  state: () => ({
    loading: false,
    error: null as string | null,
    message: null as string | null
  }),

  actions: {
    async forgotPassword(email: string) {
      this.loading = true;
      this.error = null;
      this.message = null;
      
      try {
        const response: any = await $fetch('/api/auth/forgot-password', {
          method: 'POST',
          baseURL: 'http://localhost:8000',
          body: { email }
        });
        
        if (response.success) {
          this.message = response.message || 'Link reset password telah dikirim ke email Anda';
          return { success: true, message: this.message };
        } else {
          this.error = response.message || 'Terjadi kesalahan';
          return { success: false, message: this.error };
        }
      } catch (error: any) {
        this.error = error.data?.message || error.message || 'Terjadi kesalahan saat mengirim email reset password';
        return { success: false, message: this.error };
      } finally {
        this.loading = false;
      }
    },

    async resetPassword(data: { token: string; email: string; password: string; password_confirmation: string }) {
      this.loading = true;
      this.error = null;
      this.message = null;
      
      try {
        const response: any = await $fetch('/api/auth/reset-password', {
          method: 'POST',
          baseURL: 'http://localhost:8000',
          body: data
        });
        
        if (response.success) {
          this.message = response.message || 'Password berhasil direset';
          return { success: true, message: this.message };
        } else {
          this.error = response.message || 'Terjadi kesalahan';
          return { success: false, message: this.error };
        }
      } catch (error: any) {
        this.error = error.data?.message || error.message || 'Terjadi kesalahan saat mereset password';
        return { success: false, message: this.error };
      } finally {
        this.loading = false;
      }
    },

    clearMessages() {
      this.error = null;
      this.message = null;
    }
  },

  getters: {
    isLoading: (state) => state.loading,
    hasError: (state) => state.error !== null,
    hasMessage: (state) => state.message !== null
  }
});

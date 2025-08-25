import { useNuxtApp } from '#app'

export const useProgramStore = defineStore('program', {
  state: () => ({
    programs: [] as any[],
    loading: false,
    error: null as string | null
  }),

  actions: {
    async fetchOpenPrograms() {
      this.loading = true;
      this.error = null;

      try {
        const { $api } = useNuxtApp();
        const response: any = await $fetch(`${$api.program()}`);
        this.programs = response.data || [];
      } catch (error: any) {
        this.error = error.message || 'Terjadi kesalahan saat mengambil data program';
        console.error('Error fetching programs:', error);
      } finally {
        this.loading = false;
      }
    }
  },

  getters: {
    getPrograms: (state) => state.programs,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error !== null
  }
});

// plugins/api.client.ts

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  // Sinkronkan dengan .env dan nuxt.config.ts dengan fallback yang lebih baik untuk production
  const apiBase = config.public.apiBase || (process.env.NODE_ENV === 'production' ? 'https://your-production-domain.com/api' : 'http://localhost:8000/api');
  const authBase = config.public.authBase || (process.env.NODE_ENV === 'production' ? 'https://your-production-domain.com/api/auth' : 'http://localhost:8000/api/auth');
  const storageBase = config.public.storageBase || (process.env.NODE_ENV === 'production' ? 'https://your-production-domain.com' : 'http://localhost:8000');

  // Endpoint helper
  const api = {
    // News
    news: () => `${apiBase}/news`,
    chatbot: () => `${apiBase}/chatbot`,
    // Chat endpoint untuk conversation
    chat: () => `${apiBase}/chat`,
    // Registration Program endpoint
    registrationProgram: () => `${apiBase}/registration-program`,
    // Program endpoint
    program: () => `${apiBase}/programs/open`,
    // About endpoint
    about: () => `${apiBase}/about`,
    // Education endpoint
    education: () => `${apiBase}/education`,
    // Image helper dengan perbaikan untuk production dan hindari double slash
    getImageUrl: (imagePath: string | null | undefined) => {
      if (!imagePath) {
        return '/images/about/about-img.jpg'
      }
      
      // Jika image path sudah full URL
      if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath
      }
      
      // Jika image path dimulai dengan slash, gunakan sebagai path relatif
      if (imagePath.startsWith('/')) {
        return imagePath
      }
      
      // Gunakan storageBase untuk production yang benar dan hindari double slash
      const cleanStorageBase = storageBase.endsWith('/') ? storageBase.slice(0, -1) : storageBase;
      return `${cleanStorageBase}/api/images/${imagePath}`
    }
  };

  // Inject ke context Nuxt
  return {
    provide: {
      api,
    },
  };
});

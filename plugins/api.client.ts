// plugins/api.client.ts

export default defineNuxtPlugin(() => {
  // Pastikan plugin hanya berjalan di client-side
  if (process.server) {
    return {
      provide: {
        api: {
          news: () => 'http://localhost:8000/api/news',
          chatbot: () => 'http://localhost:8000/api/chatbot',
          chat: () => 'http://localhost:8000/api/chat',
          about: () => 'http://localhost:8000/api/about',
          education: () => 'http://localhost:8000/api/education',
          getImageUrl: (imagePath: string | null | undefined) => {
            if (!imagePath) {
              return '/images/about/about-img.jpg'
            }
            
            if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
              return imagePath
            }
            
            if (imagePath.startsWith('/')) {
              return imagePath
            }
            
            return `http://localhost:8000/images/${imagePath}`
          }
        },
      },
    };
  }

  const config = useRuntimeConfig();

  // Sinkronkan dengan .env dan nuxt.config.ts dengan fallback
  const apiBase = config.public.apiBase || 'http://localhost:8000/api';
  const authBase = config.public.authBase || 'http://localhost:8000/api/auth';
  const storageBase = config.public.storageBase || 'http://localhost:8000';

  // Endpoint helper
  const api = {
    // News
    news: () => `${apiBase}/news`,
    chatbot: () => `${apiBase}/chatbot`,
    // Chat endpoint untuk conversation
    chat: () => `${apiBase}/chat`,
    // About endpoint
    about: () => `${apiBase}/about`,
    // Education endpoint
    education: () => `${apiBase}/education`,
    // Image helper
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
      
      // Jika image path tidak dimulai dengan slash, gunakan public/images di backend Laravel
      const result = `${storageBase}/images/${imagePath}`
      return result
    }
  };

  // Inject ke context Nuxt
  return {
    provide: {
      api,
    },
  };
});

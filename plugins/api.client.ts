// plugins/api.client.ts

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  // Sinkronkan dengan .env dan nuxt.config.ts
  const apiBase = config.public.apiBase || '';
  const authBase = config.public.authBase || '';

  // <<<---- TAMBAHAN UNTUK DEBUGGING ---->>>
  // console.log('API Base URL:', apiBase);
  // <<<------------------------------------>>>

  // Endpoint helper
  const api = {
    // News
    news: () => `${apiBase}/news`,
  };

  // Inject ke context Nuxt
  return {
    provide: {
      api,
    },
  };
});

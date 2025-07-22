export default defineNuxtPlugin(() => {
  if (process.client) {
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    })
  }
}) 
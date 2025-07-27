export default defineNuxtPlugin(() => {
  if (process.client) {
    // Delay initialization to avoid hydration mismatch
    setTimeout(() => {
      import('aos').then((AOS) => {
        // Tambahkan class client-side ke body
        document.body.classList.add('client-side')
        
        // Inisialisasi AOS dengan delay yang lebih lama
        setTimeout(() => {
          AOS.default.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            // Disable automatic initialization to prevent hydration issues
            disable: 'mobile'
          })
        }, 1500)
      })
    }, 2500)
  }
}) 
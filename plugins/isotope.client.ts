export default defineNuxtPlugin(() => {
  if (process.client) {
    import('isotope-layout').then((Isotope) => {
      window.Isotope = Isotope.default
    })
  }
}) 
export default defineNuxtPlugin(async () => {
  const { fetchUser } = useAuth()
  
  // Coba fetch user saat aplikasi dimuat jika ada token
  const token = useCookie('auth-token')
  if (token.value) {
    try {
      await fetchUser()
    } catch (error) {
      console.error('Error fetching user on app load:', error)
    }
  }
})

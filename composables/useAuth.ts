export const useAuth = () => {
  const user = useState('auth.user', () => null)
  const isAuthenticated = computed(() => !!user.value)

  const login = async (credentials: { email: string, password: string }) => {
    try {
      // Call Laravel API untuk login
      const response = await $fetch('/api/auth/login', {
        method: 'POST',
        baseURL: 'http://localhost:8000',
        body: credentials
      })

      if (response.success) {
        user.value = response.user
        // Set token jika ada
        if (response.token) {
          const token = useCookie('auth-token')
          token.value = response.token
        }
        return { success: true }
      }
    } catch (error: any) {
      console.error('Login error:', error)
      return { 
        success: false, 
        message: error.data?.message || 'Login gagal' 
      }
    }
  }

  const logout = async () => {
    try {
      await $fetch('/api/auth/logout', {
        method: 'POST',
        baseURL: 'http://localhost:8000'
      })
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      user.value = null
      const token = useCookie('auth-token')
      token.value = null
      await navigateTo('/login')
    }
  }

  const fetchUser = async () => {
    try {
      const token = useCookie('auth-token')
      if (!token.value) return

      const response = await $fetch('/api/auth/user', {
        baseURL: 'http://localhost:8000',
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      })

      if (response.success) {
        user.value = response.user
      }
    } catch (error) {
      console.error('Fetch user error:', error)
      // Clear invalid token
      const token = useCookie('auth-token')
      token.value = null
    }
  }

  const hasRole = (role: string) => {
    return user.value?.roles?.some((userRole: any) => userRole.name === role) || false
  }

  return {
    user: readonly(user),
    isAuthenticated,
    login,
    logout,
    fetchUser,
    hasRole
  }
}

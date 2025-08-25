<template>
  <div class="login-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="login-form-wrapper">
            <h3 class="text-center mb-4">Masuk</h3>
            <form @submit.prevent="handleLogin">
              <div v-if="error" class="alert alert-danger mb-3">
                {{ error }}
              </div>
              
              <div class="form-group mb-3">
                <label for="email" class="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  class="form-control" 
                  :disabled="loading"
                  required
                >
              </div>
              <div class="form-group mb-3">
                <label for="password" class="form-label">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  v-model="form.password" 
                  class="form-control" 
                  :disabled="loading"
                  required
                >
              </div>
              <button type="submit" class="btn btn-primary w-100 mb-3" :disabled="loading">
                <span v-if="loading">Memproses...</span>
                <span v-else>Masuk</span>
              </button>
            </form>
            
            <div class="text-center mb-3">
              <NuxtLink to="/forgot-password" class="text-decoration-none forgot-password-link">
                Lupa Password?
              </NuxtLink>
            </div>
            
            <div class="text-center">
              <NuxtLink to="/" class="text-decoration-none">
                Kembali ke Beranda
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set page meta
definePageMeta({
  layout: 'auth',
  title: 'Masuk - Selly Andriany Gantina'
})

const { login } = useAuth()

// Reactive form data
const form = reactive({
  email: '',
  password: ''
})

const loading = ref(false)
const error = ref('')

// Handle login
const handleLogin = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const result = await login(form)
    
    if (result.success) {
      await navigateTo('/')
    } else {
      error.value = result.message || 'Login gagal'
    }
  } catch (err) {
    error.value = 'Terjadi kesalahan saat login'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.login-form-wrapper {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.form-control {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
}

.form-control:focus {
  border-color: #C75142;
  outline: none;
  box-shadow: 0 0 0 2px rgba(199, 81, 66, 0.25);
}

.btn-primary {
  background-color: #C75142;
  border-color: #C75142;
  padding: 0.75rem;
  font-weight: 600;
}

.btn-primary:hover {
  background-color: #a6443a;
  border-color: #a6443a;
}

.forgot-password-link {
  color: #C75142;
  font-size: 14px;
}

.forgot-password-link:hover {
  color: #a6443a;
  text-decoration: underline !important;
}
</style>

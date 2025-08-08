<template>
  <div class="login-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="login-form-wrapper">
            <h3 class="text-center mb-4">Lupa Password</h3>
            <p class="text-center text-muted mb-4">
              Masukkan email Anda dan kami akan mengirimkan link untuk mereset password
            </p>
            
            <form @submit.prevent="handleForgotPassword">
              <div v-if="error" class="alert alert-danger mb-3">
                {{ error }}
              </div>
              
              <div v-if="message" class="alert alert-success mb-3">
                {{ message }}
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
                  placeholder="Masukkan email Anda"
                >
              </div>
              
              <button type="submit" class="btn btn-primary w-100 mb-3" :disabled="loading">
                <span v-if="loading">Mengirim...</span>
                <span v-else>Kirim Link Reset</span>
              </button>
            </form>
            
            <div class="text-center">
              <NuxtLink to="/login" class="text-decoration-none">
                <i class="fas fa-arrow-left mr-2"></i>Kembali ke Login
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
  title: 'Lupa Password - Selly Andriany Gantina'
})

const { forgotPassword } = useResetPassword()

// Reactive form data
const form = reactive({
  email: ''
})

const loading = ref(false)
const error = ref('')
const message = ref('')

// Handle forgot password
const handleForgotPassword = async () => {
  loading.value = true
  error.value = ''
  message.value = ''
  
  try {
    const result = await forgotPassword(form.email)
    
    if (result.success) {
      message.value = result.message
      form.email = '' // Clear form after success
    } else {
      error.value = result.message
    }
  } catch (err) {
    error.value = 'Terjadi kesalahan saat mengirim email reset password'
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

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.alert {
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.375rem;
}

.alert-danger {
  color: #dc3545;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.text-muted {
  color: #6c757d;
}

a {
  color: #C75142;
}

a:hover {
  color: #a6443a;
}
</style>

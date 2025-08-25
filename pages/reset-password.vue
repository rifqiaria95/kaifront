<template>
  <div class="login-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="login-form-wrapper">
            <h3 class="text-center mb-4">Reset Password</h3>
            <p class="text-center text-muted mb-4">
              Masukkan password baru untuk akun Anda
            </p>
            
            <form @submit.prevent="handleResetPassword">
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
                  readonly
                >
              </div>
              
              <div class="form-group mb-3">
                <label for="password" class="form-label">Password Baru</label>
                <input 
                  type="password" 
                  id="password" 
                  v-model="form.password" 
                  class="form-control" 
                  :disabled="loading"
                  required
                  minlength="8"
                  placeholder="Minimal 8 karakter"
                >
              </div>
              
              <div class="form-group mb-3">
                <label for="password_confirmation" class="form-label">Konfirmasi Password</label>
                <input 
                  type="password" 
                  id="password_confirmation" 
                  v-model="form.password_confirmation" 
                  class="form-control" 
                  :disabled="loading"
                  required
                  minlength="8"
                  placeholder="Ulangi password baru"
                >
              </div>
              
              <button type="submit" class="btn btn-primary w-100 mb-3" :disabled="loading || !isFormValid">
                <span v-if="loading">Memproses...</span>
                <span v-else>Reset Password</span>
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
  title: 'Reset Password - Selly Andriany Gantina'
})

const route = useRoute()
const { resetPassword } = useResetPassword()

// Reactive form data
const form = reactive({
  email: route.query.email || '',
  password: '',
  password_confirmation: '',
  token: route.query.token || ''
})

const loading = ref(false)
const error = ref('')
const message = ref('')

// Computed untuk validasi form
const isFormValid = computed(() => {
  return form.email && 
         form.password && 
         form.password_confirmation && 
         form.password === form.password_confirmation &&
         form.password.length >= 8 &&
         form.token
})

// Check if token and email are present
onMounted(() => {
  if (!route.query.token || !route.query.email) {
    error.value = 'Link reset password tidak valid atau sudah kadaluarsa'
  }
})

// Handle reset password
const handleResetPassword = async () => {
  if (!isFormValid.value) {
    error.value = 'Pastikan semua field terisi dengan benar dan password sesuai'
    return
  }
  
  loading.value = true
  error.value = ''
  message.value = ''
  
  try {
    const result = await resetPassword({
      token: form.token,
      email: form.email,
      password: form.password,
      password_confirmation: form.password_confirmation
    })
    
    if (result.success) {
      message.value = result.message
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigateTo('/login')
      }, 2000)
    } else {
      error.value = result.message
    }
  } catch (err) {
    error.value = 'Terjadi kesalahan saat mereset password'
  } finally {
    loading.value = false
  }
}

// Watch for password mismatch
watch([() => form.password, () => form.password_confirmation], () => {
  if (form.password && form.password_confirmation && form.password !== form.password_confirmation) {
    error.value = 'Password dan konfirmasi password tidak sesuai'
  } else if (error.value === 'Password dan konfirmasi password tidak sesuai') {
    error.value = ''
  }
})
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

.form-control[readonly] {
  background-color: #f8f9fa;
  color: #6c757d;
}

.btn-primary {
  background-color: #C75142;
  border-color: #C75142;
  padding: 0.75rem;
  font-weight: 600;
}

.btn-primary:hover:not(:disabled) {
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

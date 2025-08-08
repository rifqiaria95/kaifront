<template>
  <div class="login-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="login-form-wrapper">
            <h2 class="text-center mb-4">Masuk</h2>
            <form @submit.prevent="handleLogin">
              <div class="form-group mb-3">
                <label for="email" class="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  class="form-control" 
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
                  required
                >
              </div>
              <button type="submit" class="btn btn-primary w-100 mb-3">
                Masuk
              </button>
            </form>
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
  layout: 'default',
  title: 'Masuk - Selly Andriany Gantina'
})

// Reactive form data
const form = reactive({
  email: '',
  password: ''
})

// Handle login
const handleLogin = () => {
  // Implementasi login logic di sini
  console.log('Login attempt:', form)
  
  // Untuk sementara, redirect ke dashboard atau halaman utama
  navigateTo('/')
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
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
</style>

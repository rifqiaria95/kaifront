<template>
  <Preloader />
  <NuxtLayout
    :name="'thames'"
    :logo="'/images/index-4/logo.png'"
    :logo2="'/images/index-4/black-logo.png'"
    :footerLogo="'/images/index-4/black-logo.png'"
  >
    <div class="about-page">
      <Chatbot />
      <ScrollTop />
    <!-- Hero Image Section -->
    <section class="hero-section">
      <div class="hero-background">
        <img 
          src="/images/index-4/about-foto.jpg" 
          alt="About Hero" 
          class="hero-image"
          @error="handleImageError"
          @load="handleImageLoad"
          crossorigin="anonymous"
        >
      </div>
      <div class="hero-content">
        <div class="container">
          <h2 class="hero-text">{{ aboutData?.title || 'About Me' }}</h2>
        </div>
      </div>
    </section>

    <!-- Breadcrumb -->
    <section class="breadcrumb-section">
      <div class="container">
        <div class="breadcrumb-container">
          <span class="breadcrumb-text"><a class="breadcrumb-link" href="/">Beranda</a> / <a class="breadcrumb-link" href="#">Profil</a> / <a class="breadcrumb-link" href="/about">Tentang Saya</a></span>
        </div>
      </div>
    </section>

    <!-- Main Content Area -->
    <main class="main-content">
      <div class="container">
        <!-- Loading State -->
        <div v-if="isLoading" class="loading-container">
          <div class="loading-spinner"></div>
          <p>Memuat data...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="hasError" class="error-container">
          <p class="error-text">{{ hasError }}</p>
          <button @click="aboutStore.fetchAboutData()" class="retry-button">Coba Lagi</button>
        </div>

        <!-- Content -->
        <div v-else class="content-grid">
          <!-- Image Placeholder -->
          <div class="image-section">
            <div v-if="aboutData?.image_url" class="image-container">
              <img :src="aboutData.image_url" :alt="aboutData.title" class="about-image">
            </div>
            <div v-else class="image-placeholder">
              <span class="image-text">Image</span>
            </div>
          </div>

          <!-- Text Content -->
          <div class="text-content">
            <h3 class="content-title">{{ aboutData?.title || 'Title' }}</h3>
            <p class="content-subtitle">{{ aboutData?.subtitle || 'Subtitle' }}</p>
            <div class="content-description" v-if="aboutData?.description">
              <p v-html="aboutData.description"></p>
            </div>
            <div class="content-description" v-else>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>

            <!-- Contact Information -->
            <div v-if="aboutData?.address || aboutData?.phone || aboutData?.email" class="contact-info">
              <h4 class="contact-title">Informasi Kontak</h4>
              <div class="contact-details">
                <div v-if="aboutData?.address" class="contact-item">
                  <strong>Alamat:</strong> {{ aboutData.address }}
                </div>
                <div v-if="aboutData?.phone" class="contact-item">
                  <strong>Telepon:</strong> {{ aboutData.phone }}
                </div>
                <div v-if="aboutData?.email" class="contact-item">
                  <strong>Email:</strong> {{ aboutData.email }}
                </div>
              </div>

              <!-- Social Media Links -->
              <div v-if="aboutData?.facebook || aboutData?.instagram || aboutData?.twitter || aboutData?.tiktok || aboutData?.youtube" class="social-links">
                <h5 class="social-title">Ikuti Kami</h5>
                <div class="social-icons">
                  <a v-if="aboutData?.facebook" :href="aboutData.facebook" target="_blank" class="social-icon facebook">
                    <span>Facebook</span>
                  </a>
                  <a v-if="aboutData?.instagram" :href="aboutData.instagram" target="_blank" class="social-icon instagram">
                    <span>Instagram</span>
                  </a>
                  <a v-if="aboutData?.twitter" :href="aboutData.twitter" target="_blank" class="social-icon twitter">
                    <span>Twitter</span>
                  </a>
                  <a v-if="aboutData?.tiktok" :href="aboutData.tiktok" target="_blank" class="social-icon tiktok">
                    <span>TikTok</span>
                  </a>
                  <a v-if="aboutData?.youtube" :href="aboutData.youtube" target="_blank" class="social-icon youtube">
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Video Section -->
        <div v-if="aboutData?.video" class="video-section">
          <h4 class="video-title">Video Kami</h4>
          <div class="video-container">
            <video controls class="about-video">
              <source :src="aboutData.video" type="video/mp4">
              Browser Anda tidak mendukung tag video.
            </video>
          </div>
        </div>
      </div>
    </main>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useAboutStore } from '~/stores/about'

// Setup head
useHead({
  title: 'About Us',
  meta: [
    { name: 'description', content: 'About page description' }
  ],
  link: [
    { rel: "stylesheet", href: "css/index-4/default.css" },
    { rel: "stylesheet", href: "css/index-4/style.css" },
    { rel: "stylesheet", href: "css/index-4/responsive.css" },
  ],
})

// Setup page meta
definePageMeta({
  layout: false,
})

// Setup store
const aboutStore = useAboutStore()

// Fetch data on mount
onMounted(async () => {
  await aboutStore.fetchAboutData()
  document.querySelector("body").classList.add("body-dark-mode")
  
  // Tambahkan manual sticky nav sebagai backup
  const sticky = document.getElementById("header-sticky")
  if (sticky) {
    window.addEventListener("scroll", function () {
      const scroll = window.scrollY
      if (scroll < 2) {
        sticky.classList.remove("sticky-menu")
      } else {
        sticky.classList.add("sticky-menu")
      }
    })
  }
})

// Computed properties untuk data dari API
const aboutData = computed(() => aboutStore.getAboutData)
const isLoading = computed(() => aboutStore.isLoading)
const hasError = computed(() => aboutStore.hasError)

// Image handling
const handleImageError = (event) => {
  console.error('Gambar hero tidak dapat dimuat:', event.target.src)
  // Fallback ke gradient background sudah ada di CSS
}

const handleImageLoad = () => {
  console.log('Gambar hero berhasil dimuat')
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  font-family: 'Georgia', serif;
  background-color: #fff;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 50vh;
  text-align: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #556B2F 0%, #2F4F2F 100%);
  z-index: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.6);
  transition: transform 0.3s ease;
  display: block;
}

.hero-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
}

.hero-section:hover .hero-image {
  transform: scale(1.05);
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Breadcrumb */
.breadcrumb-section {
  padding: 1rem 0;
  background-color: #f8f9fa;
}

.breadcrumb-container {
  display: inline-block;
  background-color: #C75142;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-left: 0;
  /* Sejajar dengan logo header */
  padding-left: 0;
}

.breadcrumb-link {
  color: white;
  text-decoration: none;
}

.breadcrumb-text {
  font-size: 0.9rem;
  font-family: Arial, sans-serif;
  margin-left: 15px;
}

/* Main Content */
.main-content {
  background-color: #fff;
  padding: 10rem 0;
  min-height: 60vh;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: start;
  margin-left: 0;
  /* Sejajar dengan logo header */
  padding-left: 0;
}

/* Loading and Error States */
.loading-container {
  text-align: center;
  padding: 3rem 0;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #FFD700;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-container {
  text-align: center;
  padding: 3rem 0;
}

.error-text {
  color: #dc2626;
  margin-bottom: 1rem;
}

.retry-button {
  background-color: #FFD700;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.retry-button:hover {
  background-color: #e6c200;
}

/* Image Section */
.image-section {
  display: flex;
  justify-content: flex-start;
  /* Sejajar dengan logo header */
  margin-left: 0;
  padding-left: 0;
}

.image-container {
  width: 468px;
  height: 600px;
  border-radius: 8px;
  overflow: hidden;
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.image-placeholder {
  width: 488px;
  height: 600px;
  background-color: #FFD700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.image-text {
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Text Content */
.text-content {
  font-family: Arial, sans-serif;
}

.content-title {
  color: #000;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  font-family: 'Georgia', serif;
}

.content-subtitle {
  color: #666;
  font-size: 1.2rem;
  margin: 0 0 2rem 0;
  font-family: 'Georgia', serif;
}

.content-description {
  color: #000;
  line-height: 1.6;
}

.content-description p {
  margin-bottom: 1rem;
}

.content-description p:last-child {
  margin-bottom: 0;
}

/* Contact Information */
.contact-info {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e5e5;
}

.contact-title {
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  font-family: 'Georgia', serif;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-item {
  color: #000;
  line-height: 1.5;
}

/* Social Media Links */
.social-links {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e5e5;
}

.social-title {
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  font-family: 'Georgia', serif;
}

.social-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.social-icon {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #FFD700;
  color: #000;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.social-icon:hover {
  background-color: #e6c200;
}

.social-icon.facebook:hover {
  background-color: #1877f2;
  color: white;
}

.social-icon.instagram:hover {
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  color: white;
}

.social-icon.twitter:hover {
  background-color: #1da1f2;
  color: white;
}

.social-icon.tiktok:hover {
  background-color: #000;
  color: white;
}

.social-icon.youtube:hover {
  background-color: #ff0000;
  color: white;
}

/* Video Section */
.video-section {
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 2px solid #e5e5e5;
}

.video-title {
  color: #000;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 2rem 0;
  text-align: center;
  font-family: 'Georgia', serif;
}

.video-container {
  max-width: 800px;
  margin: 0 auto;
}

.about-video {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
}

/* Ensure navbar works correctly */
#header-sticky {
  position: relative;
  z-index: 999;
}

#header-sticky.sticky-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: #ffffff;
  box-shadow: 0 8px 4px -7px rgba(115, 115, 115, 0.3);
}

/* Clean up any unwanted elements in header */
#header-sticky * {
  outline: none !important;
}

/* Style the login button properly */
#header-sticky .header-btn a {
  font-family: "Cormorant Garamond", serif;
  padding: 13px 28px;
  border: 1px solid #c75142;
  border-radius: 5px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.3s ease;
  background: transparent;
  display: inline-block;
  min-width: 100px;
  text-align: center;
}

#header-sticky .header-btn a:hover {
  background: #c75142;
  color: #ffffff;
}

#header-sticky.sticky-menu .header-btn a {
  color: #2e2e37;
  padding: 8px 20px;
  border: 1px solid #c75142;
}

#header-sticky.sticky-menu .header-btn a:hover {
  background: #c75142;
  color: #ffffff;
}

/* Ensure proper header layout */
#header-sticky .header {
  background: transparent;
}

#header-sticky.sticky-menu .header {
  background: #ffffff;
}

/* Style menu items properly */
#header-sticky .main-menu ul li > a {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  display: inline-block;
  text-transform: uppercase;
  padding: 53px 0;
  position: relative;
  font-family: "Cormorant Garamond", serif;
  text-decoration: none;
}

#header-sticky .main-menu ul li:hover > a,
#header-sticky .main-menu ul li.active a {
  color: #c75142;
}

#header-sticky.sticky-menu .main-menu ul li > a {
  color: #2e2e37;
  padding: 24px 0;
}

#header-sticky.sticky-menu .main-menu ul li:hover > a,
#header-sticky.sticky-menu .main-menu ul li.active a {
  color: #c75142;
}

/* Style logo properly */
#header-sticky .logo {
  margin: 0;
}

#header-sticky .logo img {
  max-width: 100%;
  height: auto;
}

#header-sticky .header-logo {
  display: block;
}

#header-sticky .header-sticky-logo {
  display: none;
}

#header-sticky.sticky-menu .header-logo {
  display: none;
}

#header-sticky.sticky-menu .header-sticky-logo {
  display: block;
}

/* Style mobile menu properly */
#header-sticky .mobile-m-bar {
  display: none;
}

@media (max-width: 1199px) {
  #header-sticky .main-menu {
    display: none;
  }
  
  #header-sticky .mobile-m-bar {
    display: block;
  }
  
  #header-sticky .mobile-m-bar a {
    color: #c75142;
    font-size: 24px;
    text-decoration: none;
  }
  
  /* Fix mobile login button */
  #header-sticky .header-btn {
    margin-right: 15px;
  }
  
  #header-sticky .header-btn a {
    display: inline-block !important;
    padding: 8px 16px !important;
    border: 1px solid #c75142 !important;
    border-radius: 4px !important;
    color: #ffffff !important;
    text-decoration: none !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    font-size: 14px !important;
    background: transparent !important;
    transition: all 0.3s ease !important;
    min-width: 80px !important;
    text-align: center !important;
    line-height: 1.2 !important;
    white-space: nowrap !important;
  }
  
  #header-sticky .header-btn a:hover {
    background: #c75142;
    color: #ffffff;
  }
  
  #header-sticky.sticky-menu .header-btn a {
    color: #2e2e37 !important;
  }
  
  #header-sticky.sticky-menu .header-btn a:hover {
    background: #c75142 !important;
    color: #ffffff !important;
  }
}

/* Additional mobile fixes */
@media (max-width: 767px) {
  #header-sticky .header-btn a {
    font-size: 12px !important;
    padding: 6px 12px !important;
    min-width: 70px !important;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    margin-top: 10px;
    height: 35vh;
  }
  .hero-background {
    margin-top: 0;
    background-position: center center;
  }
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-left: 15px;
  }
  
  .image-section {
    justify-content: center;
  }
  
  .breadcrumb-container {
    padding-left: 15px;
  }
  
  .image-container,
  .image-placeholder {
    width: 250px;
    height: 250px;
  }
  
  .hero-text {
    font-size: 2.5rem;
  }
  
  .hero-section {
    height: 40vh;
  }
  
  .content-title {
    font-size: 2rem;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  .video-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-background {
    margin-top: 0;
    background-position: center center;
  }
  .content-grid {
    padding-left: 15px;
  }
  
  .breadcrumb-container {
    padding-left: 15px;
  }
  
  .image-container,
  .image-placeholder {
    width: 250px;
    height: 350px;
    margin-top: -90px;
    margin-bottom: 20px;
  }
  
  .hero-text {
    font-size: 2rem;
  }
  
  .hero-section {
    margin-top: -10px;
    height: 35vh;
  }
  
  .content-title {
    font-size: 1.5rem;
  }
  
  .video-title {
    font-size: 1.2rem;
  }
}
</style> 
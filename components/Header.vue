<template>
  <header>
    <div id="header-sticky" class="transparent-header header-area">
      <div class="header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
              <div class="logo mt-50 mb-50 transition5">
                <a class="header-logo" href="#"
                  ><img :src="logo" alt="THAMES"
                /></a>
                <a class="header-sticky-logo" href="#" v-if="logo2.length > 0"
                  ><img :src="logo2" alt="HIBRO"
                /></a>
              </div>
            </div>
            <!-- /col -->
            <div
              class="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7 pl-0 d-flex justify-content-end align-items-center"
            >
              <div class="main-menu d-none d-xl-block">
                <nav id="mobile-menu">
                  <ul class="d-block">
                    <li>
                      <a class="active" href="#home">Beranda</a>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Profil <i class="fa fa-angle-down"></i></a>
                      <ul class="submenu">
                        <li>
                          <a href="#about">Tentang Saya</a>
                        </li>
                        <li>
                          <a href="#visimisi">Visi & Misi</a>
                        </li>
                        <li>
                          <a href="#portfolio">Pendidikan</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#program">Program</a>
                    </li>
                    <li>
                      <a href="#work">Pengalaman</a>
                    </li>
                    <li>
                      <a href="#service">Pendidikan</a>
                    </li>
                    <li>
                      <a href="#contact">Kontak</a>
                    </li>
                    <li>
                      <a href="#blog">Galeri</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <!-- /main-menu -->
              <div class="header-btn pl-45" v-if="downloadBtn">
                <a
                  href="/login"
                  class="white-text text-uppercase d-inline-block f-700"
                  >Masuk</a
                >
              </div>
              <!-- /header-btn -->
              <div class="mobile-m-bar d-block d-lg-none ml-30">
                <a
                  @click="toggle = !toggle"
                  class="mobile-menubar theme-color primary-hover"
                  href="javascript:void(0);"
                  ><i class="far fa-bars"></i
                ></a>
              </div>
            </div>
            <!-- /col -->
          </div>
          <!-- /row -->
        </div>
        <!-- /container -->
      </div>
    </div>
    <!-- /header-bottom -->
  </header>
  <!--  header-area-end  -->

  <!--  ====== header extra info start
    ============================================================ -->

  <!-- side-mobile-menu start -->
  <div
    class="side-mobile-menu pt-15 pb-30 pl-30 pr-20 pb-100 d-block d-xl-none z-index999"
    :class="toggle ? 'open-menubar' : ''"
  >
    <div class="d-fle justify-content-between w-100">
      <div class="close-icon d-inline-block float-right clear-both mt-20 mb-15">
        <a href="javascript:void(0);" @click="toggle = !toggle"
          ><span class="icon-clear theme-color"
            ><i class="fa fa-times"></i></span
        ></a>
      </div>
    </div>
    <div class="mobile-menu mt-10 mean-container">
      <div class="mean-bar">
        <nav class="mean-nav">
          <ul class="d-block">
            <li>
              <a class="active" href="#home">Beranda</a>
            </li>
            <li class="menu-item-has-children" :class="{ open: mobileSubmenuOpen }">
              <a href="#" @click.prevent="toggleMobileSubmenu">Profil</a>
              <ul class="submenu">
                <li>
                  <a href="#about">Tentang Saya</a>
                </li>
                <li>
                  <a href="#visimisi">Visi & Misi</a>
                </li>
                <li>
                  <a href="#portfolio">Pendidikan</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#program">Program</a>
            </li>
            <li>
              <a href="#work">Pengalaman</a>
            </li>
            <li>
              <a href="#service">Pendidikan</a>
            </li>
            <li>
              <a href="#contact">Kontak</a>
            </li>
            <li>
              <a href="#blog">Galeri</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <h5 class="text-white text-center mt-80 pb-1 d-inline-block ml-3">
      Follow me
    </h5>
    <ul class="social social-bg text-center d-flex mt-10 ml-3">
      <li class="mr-2 rotate-hover">
        <a
          class="facebook-bg text-center pr-0 text-white d-block transition-3 rotate"
          href="#"
          ><i class="fab fa-facebook-f"></i
        ></a>
      </li>
      <li class="mr-2 rotate-hover">
        <a
          class="twitter-bg text-center pr-0 text-white d-block rotate transition-3"
          href="#"
          ><i class="fa-brands fa-tiktok"></i>
        </a>
      </li>
      <li class="mr-2 rotate-hover">
        <a
          class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3"
          href="#"
          ><i class="fab fa-linkedin-in"></i
        ></a>
      </li>
      <li class="mr-2 rotate-hover">
        <a
          class="instagram-bg text-center pr-0 text-white d-block rotate transition-3"
          href="https://www.instagram.com/sellygantina76?igsh=MXhmd2djb3F6Y216cg==" target="_blank"
          ><i class="fab fa-instagram"></i
        ></a>
      </li>
    </ul>
    <!-- social -->
  </div>
  <!-- /side-mobile-menu -->
  <div
    class="body-overlay"
    @click="toggle = !toggle"
    :class="toggle ? 'opened' : ''"
  ></div>
  <!-- header extra info end  -->
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      mobileSubmenuOpen: false, // This needs to be here
    };
  },
  methods: {
    toggleMobileSubmenu() {
      this.mobileSubmenuOpen = !this.mobileSubmenuOpen;
    }
  },
  mounted() {
    thamesUtils.stickyNav();
  },
  props: {
    logo: {
      type: String,
      default: "/images/logo/logo.png",
    },
    logo2: {
      type: String,
      default: "",
    },
    downloadBtn: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
/* 1. Mengembalikan layout flexbox horizontal pada menu utama */
.main-menu nav > ul {
  display: flex;
  align-items: center;
}

/* 2. Setiap item menu (termasuk yang tidak punya dropdown) */
.main-menu nav > ul > li {
  position: relative;
  margin: 0 15px; /* Memberi jarak antar menu */
}

/* 3. Link di dalam menu */
.main-menu nav > ul > li > a {
  display: block;
  padding: 30px 0; /* Memberi area hover vertikal yang konsisten */
}

/* 4. Tampilkan submenu saat hover di parent-nya */
.menu-item-has-children:hover > .submenu {
  display: block;
  opacity: 1;
  visibility: visible;
}

/* 5. Styling Submenu - Ini bagian pentingnya */
.submenu {
  /* Sembunyikan submenu secara default */
  display: none;
  opacity: 0;
  visibility: hidden;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100%; /* Posisi tepat di bawah parent */

  /* KUNCI ANTI-GAGAL: Padding transparan di atas untuk "menangkap" kursor */
  padding-top: 20px;
  
  background: transparent; /* Container submenu kita buat transparan */
  border: none;
  z-index: 1000;
  min-width: 220px;
  text-align: left;
  transition: all 0.3s ease-in-out;
}

/* 6. Ini adalah "kotak" dropdown yang terlihat */
.submenu::after {
  content: '';
  position: absolute;
  top: 20px; /* Mulai setelah padding transparan */
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  z-index: -1;
}


.submenu li {
  list-style: none;
}

.submenu li a {
  display: block;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  white-space: nowrap;
}

.submenu li a:hover {
  color: #C75142;
}

/* Hapus dekorasi link terakhir di submenu */
.submenu li:last-child a {
  border-bottom: 0;
}

/* Aturan untuk layar yang lebih kecil (misal: tablet dan laptop kecil) */
@media (max-width: 1200px) {
  .main-menu nav > ul > li {
    margin: 0 8px; /* Kurangi jarak antar menu */
  }

  .main-menu nav > ul > li > a {
    font-size: 13px; /* Kurangi ukuran font menu utama */
  }
}

/* Styles for Mobile Dropdown Menu */
.side-mobile-menu .menu-item-has-children > a {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
}

.side-mobile-menu .menu-item-has-children > a::after {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url('/fonts/angle-down-solid-full.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.3s ease;
  margin-left: auto;
  vertical-align: middle;
}

.side-mobile-menu .menu-item-has-children.open > a::after {
  transform: rotate(180deg);
}


.side-mobile-menu .submenu {
    display: none !important;
    list-style: none;
    padding-left: 30px;
    padding-top: 10px;
    margin-top: 0;
    background: transparent;
    position: static;
    transform: none;
    border: none;
    box-shadow: none;
    min-width: auto;
    opacity: 1;
    visibility: visible;
    transition: none;
}
.side-mobile-menu .submenu::after {
    display: none;
}

.side-mobile-menu .menu-item-has-children.open > .submenu {
    display: block !important;
}

.side-mobile-menu .submenu li {
    margin: 0;
}

.side-mobile-menu .submenu li a {
    padding: 8px 0;
    color: #fff;
    font-size: 15px;
    border: none !important;
    text-transform: uppercase;
    font-weight: 400;
}

.side-mobile-menu .submenu li a:hover {
    color: #ddd;
}

/* Hide original arrow icon if it exists */
.side-mobile-menu .menu-item-has-children > a > .fa-angle-down {
   display: none;
}

/* Debug class - temporary visual indicator */
.side-mobile-menu .menu-item-has-children.open > a {
    background-color: rgba(255,255,255,0.1) !important;
}

/* Fix container width to prevent horizontal expansion */
.side-mobile-menu {
    width: 300px !important;
    max-width: 300px !important;
}

.side-mobile-menu .mobile-menu {
    width: 100% !important;
}

.side-mobile-menu .mean-container {
    width: 100% !important;
}

</style>

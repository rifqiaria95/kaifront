<template>
  <div id="home" class="slider-area slider-bg-color over-hidden">
    <div
      class="single-slider slider-height over-hidden position-relative xxl-device-width bg-cover no-repeat"
      :data-background="bgImage"
    >
      <div id="scene" class="parallax position-absolute w-100 h-100 z-index1">
        <img
          data-depth="0.20"
          class="hero-shape hero-shape1 position-absolute d-none d-lg-inline-block"
          src="/images/shape/shape1.png"
          alt="#"
        /><!-- /hero-shape1 -->
        <img
          data-depth="0.15"
          class="hero-shape hero-shape2 position-absolute d-none d-lg-inline-block"
          src="/images/shape/shape2.png"
          alt="#"
        /><!-- /hero-shape2 -->
        <img
          data-depth="0.30"
          class="hero-shape hero-shape3 position-absolute d-none d-lg-inline-block"
          src="/images/shape/Shape3.png"
          alt="#"
        /><!-- /hero-shape3 -->
        <img
          data-depth="0.10"
          class="hero-shape hero-shape4 position-absolute d-none d-lg-inline-block"
          src="/images/shape/shape4.png"
          alt="#"
        /><!-- /hero-shape4 -->
      </div>
      <!-- /parallax -->

      <div class="container slider-container">
        <div class="row justify-content-center align-items-center">
          <div
            class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center"
          >
            <div class="slider-wrapper h-100">
              <div
                class="slider-content text-center mt-65 text-lg-left position-relative z-index99"
                data-aos="fade-right"
                data-aos-duration="2200"
                data-aos-delay="1000"
                style="z-index: 9; position: relative;"
              >
                <h1 class="mb-25 text-uppercase white-text" style="color: #fff !important; font-size: 72px; font-weight: bold; line-height: 1.085;">
                  <span
                    class="sub-heading d-block text-uppercase theme-color mb-10"
                    style="color: #c75142 !important; font-size: 30px; letter-spacing: 4px;"
                    >Halo, Saya</span
                  >
                  Hj. Selly Andriany Gantina
                </h1>
                <h2 class="text-uppercase white-text mb-40" style="color: #fff !important; font-size: 24px;">
                  Saya adalah
                  <span class="d-text d-block d-sm-inline-block">
                    <span
                      class="typer theme-color d-inline-block pl-2"
                      id="main"
                      data-words="Anggota Komisi VIII DPR RI dari Fraksi PDI Perjuangan."
                      data-delay="100"
                      data-deleteDelay="1000"
                      data-colors="#c75142"
                      style="color: #c75142 !important; font-size: 24px;"
                    ></span
                    ><span
                      class="cursor theme-color d-inline-block"
                      data-owner="main"
                      style="color: #c75142 !important;"
                    ></span>
                  </span>
                </h2>
                <a
                  href="#hero-btn"
                  class="btn position-relative over-hidden theme-bg text-white text-uppercase mt-40"
                  style="background-color: #c75142; color: #fff; padding: 15px 30px; display: inline-block; text-decoration: none; border: none;"
                  >Say Hello</a
                >
              </div>
              <!-- /slider-content -->
            </div>
            <!-- /slider-wrapper -->
          </div>
          <!-- /col -->

          <div
            class="col-xl-6 col-lg-6 col-md-10 col-sm-10 col-12 pl-xl-0 d-flex align-items-end h-100"
          >
            <div class="slider-img ml--40 pt-100 position-relative z-index1 h-100">
              <img
                class="img-grayscale"
                src="/images/slider/person.png"
                alt="hero image"
              />
            </div>
            <!-- /slider-img -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->

      <div
        class="slider-social-link position-absolute right-0 d-block z-index11"
      >
        <ul class="social pr-25">
          <li class="mt-10 mb-10 rotate-hover">
            <a class="text-white text-center d-inline-block rotate" href="#"
              ><i class="fab fa-facebook-f"></i
            ></a>
          </li>
          <li class="mt-10 mb-10 rotate-hover">
            <a class="text-white text-center d-inline-block rotate" href="https://www.tiktok.com/@sellygantina?_t=ZS-8yF29UGlEJs&_r=1" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                  <path fill="#fff" d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
              </svg>
            </a>
          </li>
          <li class="mt-10 mb-10 rotate-hover">
            <a class="text-white text-center d-inline-block rotate" href="https://www.instagram.com/sellygantina76?igsh=MXhmd2djb3F6Y216cg==" target="_blank"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li class="mt-10 mb-10 rotate-hover">
            <a class="text-white text-center d-inline-block rotate" href="https://www.youtube.com/@sagchannel1320" target="_blank"
              ><i class="fab fa-youtube"></i
            ></a>
          </li>
        </ul>
        <!-- social -->
      </div>
      <!-- /slider-social-link -->
    </div>
    <!-- /single-slider -->
  </div>
</template>

<script>
import { TyperSetup } from "../utils/typer.js";

export default {
  props: {
    bgImage: {
      type: String,
      default: "/images/slider/slider-bg.jpg",
    },
  },
  mounted() {
    // Add delay to ensure DOM is ready
    setTimeout(() => {
      TyperSetup();
    }, 500);
    
    // Initialize parallax effect
    if (process.client && document.getElementById('scene')) {
      import('parallax-js').then((Parallax) => {
        const scene = document.getElementById('scene');
        if (scene) {
          new Parallax.default(scene);
        }
      }).catch(() => {
        // Fallback if parallax fails
        console.log('Parallax not loaded');
      });
    }
  },
};
</script>

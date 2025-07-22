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
                class="slider-content text-center mt-65 text-lg-left position-relative z-index11"
                data-aos="fade-right"
                data-aos-duration="2200"
                data-aos-delay="1000"
                style="z-index: 99999; position: relative;"
              >
                <h1 class="mb-25 text-uppercase white-text" style="color: #fff !important; font-size: 72px; font-weight: bold; line-height: 1.085;">
                  <span
                    class="sub-heading d-block text-uppercase theme-color mb-10"
                    style="color: #c75142 !important; font-size: 30px; letter-spacing: 4px;"
                    >Hello I'm</span
                  >
                  Selly Andriany Gantina
                </h1>
                <h2 class="text-uppercase white-text mb-40" style="color: #fff !important; font-size: 36px;">
                  A Passionate
                  <span class="d-text d-block d-sm-inline-block">
                    <span
                      class="typer theme-color d-inline-block pl-2"
                      id="main"
                      data-words="Web Developer,Web Designer,Freelancer"
                      data-delay="100"
                      data-deleteDelay="1000"
                      data-colors="#c75142"
                      style="color: #c75142 !important;"
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
            <a class="text-white text-center d-inline-block rotate" href="#"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li class="mt-10 mb-10 rotate-hover">
            <a class="text-white text-center d-inline-block rotate" href="#"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </li>
          <li class="mt-10 mb-10 rotate-hover">
            <a class="text-white text-center d-inline-block rotate" href="#"
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

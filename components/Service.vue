<template>
  <div id="service" class="service-area over-hidden pt-160 pb-145" :class="bg">
    <div class="service-wrapper position-relative">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="title text-center">
              <span class="theme-color text-uppercase d-block mb-6"
                >Service</span
              >
              <h2 :class="titleColor">What I offer</h2>
            </div>
            <!-- /title -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
        <div class="row service-wrappers mt-80">
          <div
            class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            data-aos-delay="500"
            v-for="item in items"
          >
            <div
              class="single-service shadow-hover transition3 border-radius10 pl-50 pr-50 pt-65 pb-55 mb-25"
              :class="itemBg"
            >
              <div class="row">
                <div
                  class="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-4 text-lg-center"
                >
                  <div
                    class="service-ser-icon d-inline-block text-center position-relative mb-15"
                  >
                    <img
                      class="position-relative z-index1"
                      :src="item.icon"
                      alt="icon"
                    />
                    <div
                      class="service-small-circle service-circle rounded-circle transition5 secondary-bg d-inline-block position-absolute"
                    ></div>
                    <div
                      class="service-large-circle service-circle rounded-circle transition5 secondary-bg d-inline-block position-absolute"
                    ></div>
                  </div>
                  <!-- /service-ser-icon -->
                </div>
                <!-- /col -->
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div class="service-text d-inline-block ml-xl-2">
                    <h3 class="mb-15">{{ item.title }}</h3>
                    <p class="mb-0">
                      {{ item.desc }}
                    </p>
                  </div>
                </div>
                <!-- /col -->
              </div>
            </div>
            <!-- /single-service -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->

      <div
        v-if="!classic"
        class="about-icon position-absolute d-none d-md-inline-block z-index1 zoom-animation"
      >
        <img src="/images/shape/content-shape2.png" alt="shape 2" />
      </div>
      <!-- /intro-feature-icon -->
    </div>
    <!-- /service-wrapper -->
  </div>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: "primary-bg",
    },
    items: {
      type: Array,
      required: false,
      default: [
        {
          id: 1,
          title: "Web Development",
          icon: "images/icon/ser-icon1.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          title: "Software Development",
          icon: "images/icon/ser-icon2.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          title: "System Development",
          icon: "images/icon/ser-icon3.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
        },
        {
          id: 4,
          title: "Security Analysis",
          icon: "images/icon/ser-icon4.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    itemBg: {
      type: String,
      default: "white-bg",
    },
    titleColor: {
      type: String,
      default: "text-white",
    },
    classic: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

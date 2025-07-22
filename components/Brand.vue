<template>
  <div class="brand-area brand-height over-hidden">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <client-only>
            <Swiper
              :autoplay="{ delay: 8000, disableOnInteraction: true }"
              :navigation="true"
              :pagination="{ clickable: true }"
              :breakpoints="{
                1025: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                991: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }"
              :loop="true"
              class="brand-active mt-70 mb-90"
            >
              <SwiperSlide class="d-inline-block position-relative over-hidden">
                <a
                  class="single-brand single-brand-out pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-img1.png"
                    alt="brand logo 1"
                  />
                </a>
                <a
                  class="single-brand single-brand-hover pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-hover-img1.png"
                    alt="brand logo 1"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide class="d-inline-block position-relative over-hidden">
                <a
                  class="single-brand single-brand-out pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-img2.png"
                    alt="brand logo 2"
                  />
                </a>
                <a
                  class="single-brand single-brand-hover pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-hover-img2.png"
                    alt="brand logo 2"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide class="d-inline-block position-relative over-hidden">
                <a
                  class="single-brand single-brand-out pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-img3.png"
                    alt="brand logo 3"
                  />
                </a>
                <a
                  class="single-brand single-brand-hover pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-hover-img3.png"
                    alt="brand logo 3"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide class="d-inline-block position-relative over-hidden">
                <a
                  class="single-brand single-brand-out pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-img4.png"
                    alt="brand logo 4"
                  />
                </a>
                <a
                  class="single-brand single-brand-hover pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-hover-img4.png"
                    alt="brand logo 4"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide class="d-inline-block position-relative over-hidden">
                <a
                  class="single-brand single-brand-out pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-img5.png"
                    alt="brand logo 5"
                  />
                </a>
                <a
                  class="single-brand single-brand-hover pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-hover-img5.png"
                    alt="brand logo 5"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide class="d-inline-block position-relative over-hidden">
                <a
                  class="single-brand single-brand-out pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-img1.png"
                    alt="brand logo 1"
                  />
                </a>
                <a
                  class="single-brand single-brand-hover pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-hover-img1.png"
                    alt="brand logo 1"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide class="d-inline-block position-relative over-hidden">
                <a
                  class="single-brand single-brand-out pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-img2.png"
                    alt="brand logo 2"
                  />
                </a>
                <a
                  class="single-brand single-brand-hover pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-hover-img2.png"
                    alt="brand logo 2"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide class="d-inline-block position-relative over-hidden">
                <a
                  class="single-brand single-brand-out pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-img3.png"
                    alt="brand logo 3"
                  />
                </a>
                <a
                  class="single-brand single-brand-hover pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-hover-img3.png"
                    alt="brand logo 3"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide class="d-inline-block position-relative over-hidden">
                <a
                  class="single-brand single-brand-out pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-img4.png"
                    alt="brand logo 4"
                  />
                </a>
                <a
                  class="single-brand single-brand-hover pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-hover-img4.png"
                    alt="brand logo 4"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide class="d-inline-block position-relative over-hidden">
                <a
                  class="single-brand single-brand-out pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-img5.png"
                    alt="brand logo 5"
                  />
                </a>
                <a
                  class="single-brand single-brand-hover pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/brand-hover-img5.png"
                    alt="brand logo 5"
                  />
                </a>
              </SwiperSlide>
            </Swiper>
          </client-only>
        </div>
        <!-- /col -->
      </div>
      <!-- /row -->
      <div class="theme-border-bottom"></div>
    </div>
    <!-- /container -->
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

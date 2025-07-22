<template>
  <div class="brand-area brand-height over-hidden">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="brand-active pt-90 pb-50">
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
              >
                <SwiperSlide>
                  <a
                    class="single-brand mb-40 d-block text-center"
                    href="index.html"
                  >
                    <img
                      class="zoom-img img"
                      src="/images/brand/brand-img1.png"
                      alt=""
                  /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    class="single-brand mb-40 d-block text-center"
                    href="index.html"
                  >
                    <img
                      class="zoom-img img"
                      src="/images/brand/brand-img2.png"
                      alt=""
                  /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    class="single-brand mb-40 d-block text-center"
                    href="index.html"
                  >
                    <img
                      class="zoom-img img"
                      src="/images/brand/brand-img3.png"
                      alt=""
                  /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    class="single-brand mb-40 d-block text-center"
                    href="index.html"
                  >
                    <img
                      class="zoom-img img"
                      src="/images/brand/brand-img4.png"
                      alt=""
                  /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    class="single-brand mb-40 d-block text-center"
                    href="index.html"
                  >
                    <img
                      class="zoom-img img"
                      src="/images/brand/brand-img5.png"
                      alt=""
                  /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    class="single-brand mb-40 d-block text-center"
                    href="index.html"
                  >
                    <img
                      class="zoom-img img"
                      src="/images/brand/brand-img1.png"
                      alt=""
                  /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    class="single-brand mb-40 d-block text-center"
                    href="index.html"
                  >
                    <img
                      class="zoom-img img"
                      src="/images/brand/brand-img2.png"
                      alt=""
                  /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    class="single-brand mb-40 d-block text-center"
                    href="index.html"
                  >
                    <img
                      class="zoom-img img"
                      src="/images/brand/brand-img3.png"
                      alt=""
                  /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    class="single-brand mb-40 d-block text-center"
                    href="index.html"
                  >
                    <img
                      class="zoom-img img"
                      src="/images/brand/brand-img4.png"
                      alt=""
                  /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    class="single-brand mb-40 d-block text-center"
                    href="index.html"
                  >
                    <img
                      class="zoom-img img"
                      src="/images/brand/brand-img5.png"
                      alt=""
                  /></a>
                </SwiperSlide>
              </Swiper>
            </client-only>
          </div>
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

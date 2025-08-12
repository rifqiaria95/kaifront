<template>
  <div class="brand-area brand-height over-hidden mt-30">
    <div class="container">
      <div class="row mt-5">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="title text-center mb-65">
            <span class="theme-color f-700 text-uppercase d-block mb-6"
              >Dukungan</span
            >
            <h2 class="text-uppercase">Terima Kasih Kepada</h2>
          </div>
          <!-- /title -->
          <client-only>
            <Swiper
              :autoplay="{ delay: 1000, disableOnInteraction: false }"
              :navigation="false"
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
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                480: {
                  slidesPerView: 1.8,
                  spaceBetween: 15,
                  centeredSlides: true,
                },
                0: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                  centeredSlides: true,
                },
              }"
              :loop="true"
              :loopedSlides="8"
              :centeredSlides="true"
              :grabCursor="true"
              :watchSlidesProgress="true"
              :slideToClickedSlide="true"
              class="brand-active mt-70 mb-90"
            >
              <SwiperSlide class="d-inline-block position-relative over-hidden">
                <a
                  class="single-brand single-brand-out pt-20 d-block text-center transition3"
                  href="index.html"
                >
                  <img
                    class="img"
                    src="/images/brand/pdip.png"
                    alt="PDI Perjuangan"
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
                    src="/images/brand/bph.png"
                    alt="Badan Penyelenggara Haji"
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
                    src="/images/brand/bnpb.png"
                    alt="Badan Nasional Penanggulangan Bencana"
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
                    src="/images/brand/kemensos.png"
                    alt="Kementerian Sosial"
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
                    src="/images/brand/kp-ai.png"
                    alt="Komisi Perlindungan Anak"
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
                    src="/images/brand/baz-nas.png"
                    alt="Badan Amil Zakat Nasional"
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
                    src="/images/brand/kppda.png"
                    alt="Kementrian Pemberdayaan Perempuan dan Perlindungan Anak"
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
                    src="/images/brand/kementrian-agama.png"
                    alt="Kementrian Agama"
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

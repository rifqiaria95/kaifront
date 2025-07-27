<template>
  <div id="blog" class="blog-area over-hidden" :class="bg">
    <div class="marquee-w mb-45" v-if="!classic">
      <div class="marquee">
        <span class="pl-4">Senior Website Developer from New York *</span>
        <span class="pl-4">Senior Website Developer from New York *</span>
      </div>
    </div>
    <!-- /marquee -->

    <div class="blog-wrappers section-bg pt-160 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="title">
              <span class="theme-color text-uppercase d-block mb-6"
                >Dapatkan Pembaruan</span
              >
              <h2>Berita Terkini</h2>
            </div>
            <!-- /title -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
        <client-only>
          <Swiper
            :autoplay="{ delay: 8000, disableOnInteraction: true }"
            :navigation="true"
            :pagination="{ clickable: true }"
            :slides-per-view="3"
            :loop="true"
            class="row justify-content-center blog-wrapper blog-active mt-75"
          >
            <SwiperSlide
              class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
              v-for="(item, index) in items"
              :key="index"
            >
              <div class="single-blog mb-50 shadow-hover transition3">
                <div class="blog-img">
                  <img
                    class="w-100 img transition5"
                    :src="item.img"
                    alt="blog image 1"
                  />
                </div>
                <div
                  :class="itemBg"
                  class="single-blog-content pl-30 pt-25 pb-15 pr-30"
                >
                  <ul class="blog-meta">
                    <li class="mr-15 d-inline-block">
                      <span class="theme-color d-inline-block mr-1"
                        ><i class="fas fa-folder"></i
                      ></span>
                      <span
                        class="meta-text-color openS-font-family d-inline-block"
                        >Web Design</span
                      >
                    </li>
                    <li class="mr-15 d-inline-block">
                      <span class="theme-color d-inline-block mr-1"
                        ><i class="fas fa-user"></i
                      ></span>
                      <a
                        class="meta-text-color openS-font-family d-inline-block"
                        href="#"
                        >Admin</a
                      >
                    </li>
                    <li class="d-inline-block">
                      <span class="theme-color d-inline-block mr-1"
                        ><i class="fas fa-comment"></i
                      ></span>
                      <span
                        class="meta-text-color openS-font-family d-inline-block"
                        >22</span
                      >
                    </li>
                  </ul>
                  <!-- /blog-meta -->
                  <h3 class="mb-10 mt-1">
                    <a
                      class="primary-hover"
                      href="#"
                      @click.prevent="activeItem(item)"
                      >{{ item.title }}</a
                    >
                  </h3>
                </div>
              </div>
              <!-- /single-blog -->
            </SwiperSlide>
            <!-- /col -->
          </Swiper>
        </client-only>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /blog-wrapper -->
  </div>
  <BlogModal v-if="toggle" :item="item" :toggle="toggle" @close="close()" />
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
  props: {
    bg: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      required: true,
      default: [
        {
          id: 1,
          title: "Jim Morrison says when the musics over turn off the light",
          img: "/images/blog/blog-img1.jpg",
        },
        {
          id: 2,
          title: "The man who is happy will makes others too",
          img: "/images/blog/blog-img2.jpg",
        },
        {
          id: 3,
          title: "The world is not enough to live your life",
          img: "/images/blog/blog-img3.jpg",
        },
        {
          id: 4,
          title: "So close no matter how far could be much more",
          img: "/images/blog/blog-img4.jpg",
        },
        {
          id: 5,
          title: "Kobita tumi sopno charini hoye khobor nio na",
          img: "/images/blog/blog-img5.jpg",
        },
        {
          id: 6,
          title: "Become the best version of you everyday",
          img: "/images/blog/blog-img6.jpg",
        },
      ],
    },
    itemBg: {
      type: String,
      default: "bg-white",
    },
    classic: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toggle: false,
      item: null,
    };
  },
  methods: {
    activeItem(item) {
      this.toggle = true;
      this.item = item;
      document.querySelector("body").classList.add("modal-open");
    },
    close() {
      this.toggle = false;
      document.querySelector("body").classList.remove("modal-open");
    },
  },
};
</script>

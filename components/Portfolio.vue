<template>
  <div id="galeri" class="portfolio-area over-hidden pb-165">
    <div class="marquee-w mb-125">
      <div class="marquee">
        <span class="pl-4">Senior Website Developer from New York *</span>
        <span class="pl-4">Senior Website Developer from New York *</span>
      </div>
      <div class="marquee marquee2 pb-1">
        <span>I’m Open for new projects * Let’s Work Together.</span>
        <span>I’m Open for new projects * Let’s Work Together.</span>
      </div>
    </div>
    <!-- /marquee -->

    <div class="portfolio-wrapper position-relative mt--5">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="title text-center">
              <span class="theme-color text-uppercase d-block mb-6"
                >Portfolio</span
              >
              <h2>My Recent Works</h2>
            </div>
            <!-- /title -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->

        <div class="row portfolio mt-80">
          <div class="col-12" v-for="item in items">
            <div
              class="row single-portfolio position-relative theme-border-top align-items-center"
            >
              <div class="col-xl-2 col-lg-2 col-md-7 col-sm- col-">
                <div class="port-category">
                  <span class="meta-text-color text-uppercase">{{
                    item.category
                  }}</span>
                </div>
              </div>
              <!-- /col -->
              <div class="col-xl-5 col-lg-5 col-md-6 col-sm- col- pl-lg-0">
                <h3>{{ item.title }}</h3>
              </div>
              <!-- /col -->
              <div
                class="col-xl-5 col-lg-5 col-md-6 col-sm- col- d-flex justify-content-end align-items-center"
              >
                <img
                  class="port-img position-absolute left-0 ml-xl-3 transition5"
                  :src="item.img"
                  alt="portfolio image 1"
                />
                <div
                  class="port-content text-center transition5 z-index11"
                  data-toggle="modal"
                  data-target="#exampleModal-p1"
                  @click="activeItem(item)"
                >
                  <span class="d-inline-block"
                    ><i class="far fa-plus"></i>
                  </span>
                </div>
                <!-- /port-content -->
              </div>
              <!-- /col -->
            </div>
            <!-- /single-prot -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /portfolio-wrapper -->
  </div>
  <PortfolioModal
    v-if="toggle"
    :item="item"
    :toggle="toggle"
    @close="close()"
  />
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Software Design for codeefly",
          category: "web design",
          img: "/images/portfolio/port-img1.jpg",
          largeImage: "images/portfolio/port-img1-large.jpg",
        },
        {
          id: 2,
          title: "Website Development for ABC Corporation",
          category: "Development",
          img: "/images/portfolio/port-img2.jpg",
          largeImage: "images/portfolio/port-img2-large.jpg",
        },
        {
          id: 3,
          title: "Branding for Easy Computers",
          category: "Branding",
          img: "/images/portfolio/port-img3.jpg",
          largeImage: "images/portfolio/port-img3-large.jpg",
        },
        {
          id: 4,
          title: "Security Analysis for codeefly",
          category: "Photography",
          img: "/images/portfolio/port-img4.jpg",
          largeImage: "images/portfolio/port-img4-large.jpg",
        },
      ],
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

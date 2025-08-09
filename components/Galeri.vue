<template>
  <div id="galeri" class="portfolio-area over-hidden pt-155 pb-140">
    <div class="portfolio-wrapper position-relative">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="title text-center mb-65">
              <span class="theme-color f-700 text-uppercase d-block mb-6"
                >Dokumentasi Kegiatan Saya</span
              >
              <h2 class="text-uppercase">Galeri</h2>
            </div>
            <!-- /title -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
            <div class="port-button mb-50 portfolio-menu">
              <button data-filter="*" class="active">All</button>
              <button data-filter=".design">Web Design</button>
              <button data-filter=".dev">Development</button>
              <button data-filter=".photography">Photography</button>
            </div>
            <!-- /portfolio-menu -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->

        <ClientOnly>
          <div class="row portfolio grid">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item"
              :class="item.categoryCls"
            >
              <div class="single-portfolio position-relative over-hidden mb-24">
                <img class="img-grayscale w-100" :src="item.img" alt="" />
                <div
                  class="port-content text-center position-absolute transition5 z-index11"
                  @click="activeItem(item)"
                >
                  <span class="theme-color d-inline-block"
                    ><i class="far fa-external-link-alt"></i>
                  </span>
                </div>
                <!-- /port-content -->
                <div
                  class="port-over-content position-absolute left-0 pl-40 pr-40 pb-30 pt-40 z-index11"
                >
                  <span class="text-white f-600 mb-2 d-block text-uppercase">{{
                    item.category
                  }}</span>
                  <h3 class="text-white">
                    {{ item.title }}
                  </h3>
                </div>
              </div>
              <!-- /single-prot -->
            </div>
          </div>
          <template #fallback>
            <div class="row">
              <div
                v-for="(item, index) in items"
                :key="index"
                class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
              >
                <div class="single-portfolio position-relative over-hidden mb-24">
                  <img class="img-grayscale w-100" :src="item.img" alt="" />
                  <div
                    class="port-content text-center position-absolute transition5 z-index11"
                    @click="activeItem(item)"
                  >
                    <span class="theme-color d-inline-block"
                      ><i class="far fa-external-link-alt"></i>
                    </span>
                  </div>
                  <div
                    class="port-over-content position-absolute left-0 pl-40 pr-40 pb-30 pt-40 z-index11"
                  >
                    <span class="text-white f-600 mb-2 d-block text-uppercase">{{
                      item.category
                    }}</span>
                    <h3 class="text-white">
                      {{ item.title }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </ClientOnly>
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
    :imgGrayScale="true"
  />
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      setTimeout(() => {
        // Wait for Isotope to be loaded
        const waitForIsotope = () => {
          if (window.Isotope) {
            // init Isotope
            var iso = new window.Isotope(".grid", {
              itemSelector: ".grid-item",
            });
            // bind filter button click
            var filtersElem = document.querySelector(".portfolio-menu");
            if (filtersElem) {
              filtersElem.addEventListener("click", function (event) {
                // console.log(event.target.closest(".portfolio-menu button"));
                if (event.target.value !== undefined) {
                  var filterValue = event.target.getAttribute("data-filter");
                  iso.arrange({ filter: `${filterValue}` });
                }
              });

              // change is-checked class on buttons
              var buttonGroups = document.querySelectorAll(".portfolio-menu");
              for (var i = 0, len = buttonGroups.length; i < len; i++) {
                var buttonGroup = buttonGroups[i];
                radioButtonGroup(buttonGroup);
              }

              function radioButtonGroup(buttonGroup) {
                buttonGroup.addEventListener("click", function (event) {
                  if (!event.target.classList.contains("portfolio-menu")) {
                    buttonGroup.querySelector(".active").classList.remove("active");
                    event.target
                      .closest(".portfolio-menu button")
                      .classList.add("active");
                  }
                });
              }
            }
          } else {
            // Retry after 100ms if Isotope is not yet loaded
            setTimeout(waitForIsotope, 100);
          }
        };
        waitForIsotope();
      }, 1500);
    }
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Software Design for codeefly",
          category: "web design",
          img: "/images/index-4/portfolio/portfolio-img1.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img1.jpg",
          categoryCls: "dev photography",
        },
        {
          id: 2,
          title: "Website Development for ABC Corporation",
          category: "Development",
          img: "/images/index-4/portfolio/portfolio-img2.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img2.jpg",
          categoryCls: "dev design",
        },
        {
          id: 3,
          title: "Branding for Easy Computers",
          category: "Branding",
          img: "/images/index-4/portfolio/portfolio-img3.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img3.jpg",
          categoryCls: "photography",
        },
        {
          id: 4,
          title: "Security Analysis for codeefly",
          category: "Photography",
          img: "/images/index-4/portfolio/portfolio-img4.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img4.jpg",
          categoryCls: "design photography",
        },
        {
          id: 5,
          title: "Security Analysis for codeefly",
          category: "Photography",
          img: "/images/index-4/portfolio/portfolio-img5.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img5.jpg",
          categoryCls: "dev graphic",
        },
        {
          id: 6,
          title: "Security Analysis for codeefly",
          category: "Photography",
          img: "/images/index-4/portfolio/portfolio-img6.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img6.jpg",
          categoryCls: "dev design photography",
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

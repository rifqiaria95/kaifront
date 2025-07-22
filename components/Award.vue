<template>
  <div
    class="award-area over-hidden position-relative z-index11 pt-160 pb-170"
    :class="bg"
  >
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="title text-center">
            <span class="theme-color text-uppercase d-block mb-6"
              >Success Stories</span
            >
            <h2>Awards & Achivements</h2>
          </div>
          <!-- /title -->
        </div>
        <!-- /col -->
      </div>
      <!-- /row -->
      <div class="award-wrapper mt-70">
        <div
          class="row align-items-start theme-border-top theme-border-bottom award-margin pt-40 pb-35"
          v-for="item in items"
        >
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-11 col-12">
            <div class="award-logo mt-10 mb-20">
              <a href="#" class="d-block">
                <img :src="item.img" alt="award logo 3" />
              </a>
            </div>
            <!-- /award-logo -->
          </div>
          <!-- /col -->
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-11 col-12">
            <div class="award-content">
              <h3 class="mb-10">{{ item.awardTitle }}</h3>
              <p class="meta-text-color">{{ item.year }}</p>
            </div>
            <!-- /award-content -->
          </div>
          <!-- /col -->
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-11 col-12">
            <div class="award-content">
              <h3 class="mb-10">{{ item.awardProvider }}</h3>
              <p class="meta-text-color">{{ item.providerLocation }}</p>
            </div>
            <!-- /award-content -->
          </div>
          <!-- /col -->
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-11 col-12">
            <div class="award-content">
              <p>
                {{ item.desc }}
              </p>
            </div>
            <!-- /award-content -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
      </div>
      <!-- /award-wrapper -->
    </div>
    <!-- /container -->
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: false,
      default: [
        {
          id: 1,
          img: "/images/award/award-logo1.png",
          awardTitle: "Developer of the Year",
          year: "2021",
          awardProvider: "Dev Internatioal",
          providerLocation: "London, England",
          desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.",
        },
        {
          id: 2,
          img: "/images/award/award-logo2.png",
          awardTitle: "Best Developer",
          year: "2022",
          awardProvider: "Developer Association",
          providerLocation: "New York, Usa",
          desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.",
        },
        {
          id: 3,
          img: "/images/award/award-logo3.png",
          awardTitle: "Fastest Coder",
          year: "2019",
          awardProvider: "Amazing Programmer",
          providerLocation: "Dhaka, Bangladesh",
          desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.",
        },
      ],
    },
    bg: {
      type: String,
      default: "",
    },
  },
};
</script>

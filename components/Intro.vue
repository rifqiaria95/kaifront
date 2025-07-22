<template>
  <div class="intro-feature-area over-hidden position-relative section-bg">
    <div class="container">
      <div
        class="row single-intro-feature-wrapper justify-content-center pt-170 pb-140"
      >
        <div
          class="col-xl-3 col-lg-3 col-md-6 col-sm-9 col-11"
          v-for="item in items"
        >
          <div
            class="single-intro-feature-content border-radius10 transition5 mb-30"
            data-tilt
            data-tilt-max="10"
            :class="`${cardExtraCls} ${item.marginTop ? 'mt-60' : ''}`"
          >
            <div class="intro-ft-icon d-inline-block mb-30 transition5">
              <img :src="item.icon" alt="icon1" />
            </div>
            <!-- /intro ft-icon -->
            <div class="intro-feature-text">
              <h4 class="mb-22">{{ item.title }}</h4>
              <p>
                {{ item.desc }}
              </p>
            </div>
          </div>
          <!-- /single-intro-feature-content -->
        </div>
        <!-- /col -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
    <div
      class="intro-feature-text-style position-absolute d-none d-md-inline-block"
    >
      <span class="d-inline-block">James</span>
    </div>
    <!-- /intro-feature-text -->
    <div
      class="intro-feature-icon position-absolute d-none d-md-inline-block zoom-animation"
      v-if="shape.length > 0"
    >
      <img :src="shape" alt="intro shape 1" />
    </div>
    <!-- /intro-feature-icon -->
  </div>
</template>

<script>
export default {
  props: {
    cardExtraCls: {
      type: String,
      required: false,
      default: "white-bg",
    },
    items: {
      type: Array,
      required: false,
      default: [
        {
          id: 1,
          title: "Dedication",
          icon: "images/icon/intro-ft-icon1.png",
          desc: "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
          marginTop: false,
        },
        {
          id: 2,
          title: "Smart Work",
          icon: "images/icon/intro-ft-icon2.png",
          desc: "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
          marginTop: true,
        },
        {
          id: 3,
          title: "Collaboration",
          icon: "images/icon/intro-ft-icon3.png",
          desc: "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
          marginTop: false,
        },
        {
          id: 4,
          title: "Technology",
          icon: "images/icon/intro-ft-icon4.png",
          desc: "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
          marginTop: true,
        },
      ],
    },
    shape: {
      type: String,
      default: "/images/shape/content-shape1.png",
    },
  },
};
</script>

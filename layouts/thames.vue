<template>
  <Header :logo="logo" :logo2="logo2" :downloadBtn="downloadBtn" />
  <main class="over-hiddenn">
    <slot />
  </main>
  <Footer :footerLogo="footerLogo" :copyRightTextColor="copyRightTextColor" />
  <ScrollTop />
</template>

<script>
import VanillaTilt from "vanilla-tilt";
const element = ref(null);

export default {
  mounted() {
    thamesUtils.bgImage();
    thamesUtils.stickyNav();
    thamesUtils.parallax();
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 25,
      speed: 400,
    });
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 15,
      speed: 1500,
    });
  },
  props: {
    logo: {
      type: String,
      default: "/images/logo/logo.png",
    },
    logo2: {
      type: String,
      default: "",
    },
    footerLogo: {
      type: String,
      default: "/images/logo/logo-dark.png",
    },
    copyRightTextColor: {
      type: String,
      default: "primary-color",
    },
    downloadBtn: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

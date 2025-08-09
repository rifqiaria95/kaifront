<template>
  <Preloader />
  <NuxtLayout
    :name="'thames'"
    :logo="'/images/index-4/logo.png'"
    :logo2="'/images/index-4/black-logo.png'"
    :footerLogo="'/images/index-4/black-logo.png'"
  >
    <Home :bgImage="'/images/slider/slider-bg.jpg'" />
    <Chatbot />
    <About2 :signature="'/images/index-4/signature.png'" />
    <Counter />
    <Blog :classic="true" :bg="'secondary-bg'" />
    <Galeri />
    <Award :bg="'secondary-bg'" />
    <Experience />
    <Education :imgGrayScale="true" />
    <Program :bg="'secondary-bg'" />
    <Service :bg="''" :titleColor="''" :items="serviceItems" :classic="true" />
    <Testimonials
      :classic="true"
      :testimonialIcon="'/images/index-4/testimonial-icon.png'"
      :imgGrayScale="true"
    />
    <Brand />
    <Contact />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    { rel: "stylesheet", href: "css/index-4/default.css" },
    { rel: "stylesheet", href: "css/index-4/style.css" },
    { rel: "stylesheet", href: "css/index-4/responsive.css" },
  ],
});
definePageMeta({
  layout: false,
});
</script>

<script>
export default {
  mounted() {
    document.querySelector("body").classList.add("body-dark-mode");
  },
  data() {
    return {
      serviceItems: [
        {
          id: 1,
          title: "Web Development",
          icon: "/images/index-4/work/service-icon1.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          title: "Software Development",
          icon: "/images/index-4/work/service-icon2.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          title: "System Development",
          icon: "/images/index-4/work/service-icon3.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
        },
        {
          id: 4,
          title: "Security Analysis",
          icon: "/images/index-4/work/service-icon4.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
        },
      ],
    };
  },
};
</script>

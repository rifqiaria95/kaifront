<template>
  <Preloader />
  <NuxtLayout
    :name="'thames'"
    :logo="'/images/index-4/logo.png'"
    :logo2="'/images/index-4/black-logo.png'"
    :footerLogo="'/images/index-4/black-logo.png'"
  >
    <Home :bgImage="'/images/slider/slider-bg.jpg'" />

    <About2 :signature="'/images/index-4/signature.png'" />
    <Counter />
    <Portfolio2 />
    <Award :bg="'secondary-bg'" />
    <Experience />
    <Education :imgGrayScale="true" />
    <Skill2 />
    <Pricing :bg="'secondary-bg'" />
    <Service :bg="''" :titleColor="''" :items="serviceItems" :classic="true" />
    <Testimonials
      :classic="true"
      :testimonialIcon="'/images/index-4/testimonial-icon.png'"
      :imgGrayScale="true"
    />
    <Brand />
    <Contact />
    <Blog :classic="true" :bg="'secondary-bg'" :items="blogItems" />
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
      blogItems: [
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
    };
  },
};
</script>

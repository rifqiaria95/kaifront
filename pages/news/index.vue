<template>
  <Preloader />
  <NuxtLayout
    :name="'thames'"
    :logo="'/images/index-4/logo.png'"
    :logo2="'/images/index-4/black-logo.png'"
    :footerLogo="'/images/index-4/black-logo.png'"
  >
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

</script>
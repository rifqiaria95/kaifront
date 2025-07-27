<template>
  <div>
    <NuxtLayout
      :name="'thames'"
      :logo="'/images/index-4/logo.png'"
      :logo2="'/images/index-4/black-logo.png'"
      :footerLogo="'/images/index-4/black-logo.png'"
    >
      <About2 :signature="'/images/index-4/signature.png'" />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'About Us',
  meta: [
    { name: 'description', content: 'About page description' }
  ]
})

definePageMeta({
  layout: false,
})
</script>

<script>
export default {
  mounted() {
    document.querySelector("body").classList.add("body-dark-mode");
  },
}
</script> 
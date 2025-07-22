<template>
  <Header />
  <main class="over-hiddenn">
    <slot />
  </main>
  <Footer />
  <ScrollTop />
</template>

<script>
export default {
  mounted() {
    thamesUtils.bgImage();
    thamesUtils.stickyNav();
  },
};
</script>

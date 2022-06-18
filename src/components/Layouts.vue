<template>
  <Header class="z-50" />
  <main class="container w-full mx-auto my-20">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

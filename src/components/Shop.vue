<template>
  <div class="image bg-cover bg-center min-h-screen px-8 py-10 flex flex-col space-y-10 justify-center items-center">
    <h5 class="font-poppins font-bold text-2xl">Liberate your everyday wellness</h5>
    <span class="font-phil font-bold text-4xl">Shop our self-care products </span>
    <p class="font-poppins font-light text-sm leading-7">
      Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and
      get results fast. And, we always list our ingredients - so what you see is what you get.
    </p>
    <Button class="gradient py-4 px-8 text-white" greetingMessage="Upgrade your self-care" />
    <span class="font-poppins text-2xl text-center pb-80">#NoNasties, we promise!</span>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Shop",
  components: { Button },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(297.28deg, #f66e6e 67.01%, rgba(246, 110, 110, 0) 123.71%);
  filter: drop-shadow(0px 2px 6px rgba(255, 22, 64, 0.33));
  border-radius: 70px;
}
</style>

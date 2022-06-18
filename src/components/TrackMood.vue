<template>
  <div
    class="min-h-screen bg-gradient-to-b from-[#FFF6FB] to-[#FFFF] px-8 py-10 flex flex-col space-y-10 justify-center items-center"
  >
    <h5 class="font-phil font-bold text-3xl">Track your mood</h5>
    <p class="font-poppins font-light text-sm leading-7">
      All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals
      (including skin and hair health) so you can take better care of yourself every day.
    </p>
    <Button class="gradient py-4 px-8 text-white" greetingMessage="Track you mood on the app" />
    <div class="grid grid-cols-2 gap-4">
      <div v-for="items in images" :key="items">
        <img class="w-full md:w-96 h-auto drop-shadow-lg rounded-sm" :src="items.src" :alt="items.alt" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "TrackMood",
  components: { Button },
  data() {
    return {
      images: [
        {
          alt: "pexels-ketut-subiyanto",
          src: "/src/assets/pexels-ketut-subiyanto-4308162.jpg",
        },
        {
          alt: "pexels-ketut-subiyanto",
          src: "/src/assets/pexels-ketut-subiyanto-4308057.jpg",
        },
        {
          alt: "pexels-ketut-subiyanto",
          src: "/src/assets/pexels-ketut-subiyanto-4308049.jpg",
        },
        {
          alt: "pexels-ketut-subiyanto",
          src: "/src/assets/pexels-ketut-subiyanto-4308102-scaled.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(288.62deg, #6e8cf6 42.36%, rgba(110, 213, 246, 0.93) 115.74%);
  box-shadow: 0px 2px 16px rgba(71, 222, 255, 0.33);
  border-radius: 70px;
}
</style>

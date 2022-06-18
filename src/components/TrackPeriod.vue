<template>
  <div
    class="bg-[linear-gradient(176.88deg,#F3B8BC_2.68%,#FFDAD4_93.07%)] min-h-screen px-10 flex flex-col space-y-10 justify-center items-center"
  >
    <h5 class="font-phil font-bold text-3xl">Track your period</h5>
    <p class="font-poppins font-light text-sm leading-7">
      Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive
      design makes tracking your cycle effortless and helps you stay on top of your monthly data.
    </p>
    <Button class="gradient py-4 px-8" greetingMessage="Track you period on the app" />
  </div>
  <img class="object-cover" src="../assets/calender.png" alt="mestrual-calendar" />
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "TrackPeriod",
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

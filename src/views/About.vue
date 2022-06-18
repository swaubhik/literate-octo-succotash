<template>
  <div class="text-primary md:text-lg">
    <div class="px-8 py-10 bg-gradient-to-b from-[#FFF6FB] via-[#E7F6FC] to-[rgba(213,224,255,0)]">
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center space-y-10 items-center">
          <h1 class="font-phil font-semibold md:text-6xl text-4xl">About Diana</h1>
          <p class="font-quicksand mt-9">A platform that looks out for you</p>
          <p class="font-poppins text-gray-900 px-10">
            Diana empowers you to understand how your body works so you can look and feel your best.
          </p>

          <span class="container border-b border-solid border-black"></span>
        </div>
        <div class="py-10 flex flex-col justify-center items-center text-center space-y-10">
          <h2 class="font-poppins text-2xl font-bold">Our Philosophy</h2>
          <p class="font-phil text-center text-4xl">Sustainable wellness is a big-picture, inside out approach</p>
          <p class="font-sans text-base leading-9 px-8 font-bold">
            Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed
            decisions about their health and wellness.
          </p>
          <p class="text-base font-sans px-8 font-bold">That’s why we’ve created an integrated ecosystem of:</p>
        </div>
        <Card class="p-10" />
        <span class="text-center font-sans text-base"
          >Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel
          your best everyday.
        </span>
      </div>
    </div>
    <Different />
    <Shop />
    <TrackMood />
    <TrackPeriod />
    <Wellness />
    <Personalised />
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import Different from "../components/Different.vue";
import Shop from "../components/Shop.vue";
import TrackMood from "../components/TrackMood.vue";
import TrackPeriod from "../components/TrackPeriod.vue";
import Wellness from "../components/Wellness.vue";
import Personalised from "../components/Personalised.vue";

export default {
  components: { Card, Different, Shop, TrackMood, TrackPeriod, Wellness, Personalised },
};
</script>

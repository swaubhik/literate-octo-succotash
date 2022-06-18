<template>
  <div class="bg-[#F66E6E] text-white min-h-screen px-8 py-10 flex flex-col space-y-10 justify-center items-center">
    <h5 class="font-phil font-bold pl-10 text-4xl">Get your personalized period box</h5>
    <img
      class="object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
      src="../assets/pms-potion.png"
      alt="usman-yousaf"
    />
    <p class="font-poppins font-light text-sm leading-7">
      Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it
      delivered to your doorstep in sustainable packaging and track your subscription on our app.
    </p>
    <Button
      class="bg-black  md:max-w-3xl py-2 px-8 flex items-center justify-between"
      greetingMessage="Create your box on the app"
    >
      <ChevronRightIcon class="w-8 h-8 text-white" />
    </Button>
  </div>
</template>

<script>
import Button from "./Button.vue";
import { ChevronRightIcon } from "@heroicons/vue/solid";
export default {
  name: "Personalised",
  components: { Button, ChevronRightIcon },
};
</script>

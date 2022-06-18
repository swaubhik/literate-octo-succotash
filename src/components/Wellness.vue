<template>
  <div
    class="bg-[linear-gradient(270deg,#DADAE4_0.25%,#EEEEF0_24.33%,#F8F8F8_52.08%,#FEFEFE_100%)] min-h-screen px-8 flex flex-col space-y-10 justify-center items-center"
  >
    <h5 class="font-phil font-bold text-2xl">Consult with wellness experts</h5>
    <p class="font-poppins font-light text-sm leading-7">
      Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a
      few questions, and we’ll connect you to someone who is the right-fit for you.
    </p>
    <Button class="gradient py-4 px-8 text-white" greetingMessage="Get a consultation" />
  </div>
  <img class="object-cover" src="../assets/usman-yousaf.jpg" alt="usman-yousaf" />
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Wellness",
  components: { Button },
};
</script>
<style scoped>
.gradient {
  background: linear-gradient(288.62deg, #6e8cf6 42.36%, rgba(110, 213, 246, 0.93) 115.74%);
  box-shadow: 0px 2px 16px rgba(71, 222, 255, 0.33);
  border-radius: 70px;
}
</style>

<template>
  <div class="container mx-auto">
    <div class="grid md:grid-cols-3 gap-6 text-center">
      <div
        class="flex flex-col justify-center md:bg-slate-100 md:rounded-xl md:p-10 md:shadow-lg items-center space-y-9"
      >
        <Beaker />
        <span>Consciously formulated products that deliver feel-good results fast </span>
      </div>
      <div
        class="flex flex-col justify-center md:bg-slate-100 md:rounded-xl md:p-10 md:shadow-lg items-center space-y-9"
      >
        <Particle />
        <span
          >In-app mood and period tracking options that help you cultivate a deeper connection with your mind and
          body</span
        >
      </div>
      <div
        class="flex flex-col justify-center md:bg-slate-100 md:rounded-xl md:p-10 md:shadow-lg items-center space-y-9"
      >
        <Phone />
        <span> In-app consultation portals that connect you with compassionate wellness expert</span>
      </div>
    </div>
  </div>
</template>

<script>
import Beaker from "./Beaker.vue";
import Particle from "./Particle.vue";
import Phone from "./Phone.vue";
export default {
  name: "Card",
  components: { Beaker, Particle, Phone },
};
</script>

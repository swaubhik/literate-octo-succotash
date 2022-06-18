<template>
  <button class="flex flex-row justify-center items-center rounded-full cursor-pointer font-bold hover:filter-none">
    {{ greetingMessage }}
    <slot />
  </button>
</template>
<script>
import { ChevronRightIcon } from "@heroicons/vue/solid";
export default {
  name: "Button",
  components: {
    ChevronRightIcon,
  },
  props: {
    greetingMessage: String,
  },
};
</script>

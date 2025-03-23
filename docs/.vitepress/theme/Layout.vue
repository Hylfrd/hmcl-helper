<template>
  <div>
    <LayoutSwitch />
    <slot />
  </div>
</template>

<script>
import LayoutSwitch from './LayoutSwitch.vue';

export default {
  components: {
    LayoutSwitch,
  },
};
</script>
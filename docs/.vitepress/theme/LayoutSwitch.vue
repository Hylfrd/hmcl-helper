<template>
  <button @click="toggleLayout" class="layout-switch">
    {{ isWide ? '窄屏' : '宽屏' }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isWide: false,
    };
  },
  methods: {
    toggleLayout() {
      this.isWide = !this.isWide;
      document.documentElement.classList.toggle('wide-layout', this.isWide);
    },
  },
};
</script>

<style>
.layout-switch {
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1000;
}

.wide-layout {
  --vp-layout-max-width: 100%;
}
</style>
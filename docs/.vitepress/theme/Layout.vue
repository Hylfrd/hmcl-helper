<template>
  <div class="site-layout">
    <DefaultTheme.Layout />
    <SiteFooter v-if="isHome" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import SiteFooter from './SiteFooter.vue'

const { frontmatter } = useData()

const isHome = computed(() => frontmatter.value?.layout === 'home')
</script>
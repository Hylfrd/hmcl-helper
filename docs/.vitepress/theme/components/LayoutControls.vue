<template>
  <div class="layout-controls">
    <div class="control-group">
      <button class="control-btn" @click="toggleLayoutMenu">
        <span class="icon">📐</span> 布局切换
        <span class="tooltip">点击选择页面布局模式</span>
      </button>
      <div v-show="showLayoutMenu" class="layout-menu">
        <button @click="setLayout('full')">全部展开</button>
        <button @click="setLayout('adjustable-sidebar')">侧边栏可调</button>
        <button @click="setLayout('both-adjustable')">双区域可调</button>
        <button @click="setLayout('default')">原始宽度</button>
      </div>
    </div>

    <div class="control-group">
      <button class="control-btn" @click="toggleSpotlight">
        <span class="icon">🔦</span> 聚光灯 {{ spotlightEnabled ? 'ON' : 'OFF' }}
        <span class="tooltip">高亮当前阅读行</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLayoutMenu: false,
      spotlightEnabled: false,
      currentLayout: 'default'
    }
  },
  mounted() {
    this.loadPreferences()
    this.setupSpotlight()
  },
  methods: {
    toggleLayoutMenu() {
      this.showLayoutMenu = !this.showLayoutMenu
    },
    setLayout(mode) {
      document.documentElement.setAttribute('data-layout', mode)
      localStorage.setItem('layoutMode', mode)
      this.currentLayout = mode
      this.showLayoutMenu = false
    },
    toggleSpotlight() {
      this.spotlightEnabled = !this.spotlightEnabled
      localStorage.setItem('spotlightEnabled', this.spotlightEnabled)
      document.documentElement.classList.toggle('spotlight-mode', this.spotlightEnabled)
    },
    loadPreferences() {
      const savedLayout = localStorage.getItem('layoutMode') || 'default'
      this.setLayout(savedLayout)
      
      this.spotlightEnabled = localStorage.getItem('spotlightEnabled') === 'true'
      document.documentElement.classList.toggle('spotlight-mode', this.spotlightEnabled)
    },
    setupSpotlight() {
      const handler = (e) => {
        if (!this.spotlightEnabled) return
        const target = e.target.closest('p, li, h1, h2, h3, h4, h5, h6')
        document.querySelectorAll('.spotlight').forEach(el => el.classList.remove('spotlight'))
        if (target) target.classList.add('spotlight')
      }
      document.addEventListener('mousemove', handler)
      this.$once('hook:beforeDestroy', () => {
        document.removeEventListener('mousemove', handler)
      })
    }
  }
}
</script>
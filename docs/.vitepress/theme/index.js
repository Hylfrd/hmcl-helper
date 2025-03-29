import DefaultTheme from 'vitepress/theme'
import { h } from 'vue' // 必须导入 h 函数
import './style.css'
import LayoutControls from './components/LayoutControls.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 添加自定义组件到导航栏下方
      'nav-bar-content-after': () => h('div', { class: 'controls-wrapper' }, [
        h(LayoutControls)
      ])
    })
  },
  enhanceApp({ app }) {
    // 注册全局组件（可选）
    app.component('LayoutControls', LayoutControls)

    if (typeof window !== 'undefined') {
      import('viewerjs').then(({ default: Viewer }) => {
        let viewerInstance = null
        let observer = null

        const destroyViewer = () => {
          if (viewerInstance) {
            viewerInstance.destroy()
            viewerInstance = null
          }
        }

        const initImageObserver = () => {
          destroyViewer()
          const container = document.querySelector('.content-container')
          if (!container) return

          observer = new MutationObserver((mutations) => {
            const hasAddedNodes = mutations.some(m => m.addedNodes.length > 0)
            if (hasAddedNodes) setupViewer(container)
          })

          observer.observe(container, {
            childList: true,
            subtree: true
          })

          setupViewer(container)
        }

        const setupViewer = (container) => {
          destroyViewer()
          viewerInstance = new Viewer(container, {
            inline: false,
            toolbar: {
              zoomIn: 1,
              zoomOut: 1,
              oneToOne: 1,
              reset: 1,
              rotateLeft: 1,
              rotateRight: 1,
            },
            filter(image) {
              return !image.closest('.exclude-zoom')
            }
          })

          container.querySelectorAll('img').forEach(img => {
            if (!img.classList.contains('zoom-initialized')) {
              img.title = '双击查看大图 | 悬停放大'
              img.classList.add('zoom-initialized')
            }
          })
        }

        const handleRouteChange = () => {
          if (observer) observer.disconnect()
          initImageObserver()
        }

        setTimeout(handleRouteChange, 500)
        window.addEventListener('vitepress:route-change', handleRouteChange)
        window.addEventListener('beforeunload', destroyViewer)
      })
    }
  }
}
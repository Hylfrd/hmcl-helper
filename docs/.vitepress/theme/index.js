import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

    import('viewerjs').then(({ default: Viewer }) => {
      let viewerInstance = null

      const destroyViewer = () => {
        if (viewerInstance) {
          viewerInstance.destroy()
          viewerInstance = null
        }
      }

      const setupViewer = () => {
        destroyViewer()

        const container = document.querySelector('.VPDoc .vp-doc, .VPHome .vp-doc')
        if (!container) return

        const images = container.querySelectorAll('img:not(.exclude-zoom)')
        if (!images.length) return

        viewerInstance = new Viewer(container, {
          inline: false,
          toolbar: {
            zoomIn: 1,
            zoomOut: 1,
            oneToOne: 1,
            reset: 1,
            rotateLeft: 1,
            rotateRight: 1
          },
          filter(image) {
            return !image.closest('.exclude-zoom')
          }
        })

        images.forEach((img) => {
          if (!img.classList.contains('zoom-initialized')) {
            img.title = '双击查看大图 | 悬停放大'
            img.classList.add('zoom-initialized')
          }
        })
      }

      const init = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(setupViewer)
        })
      }

      init()
      router.onAfterRouteChange = () => {
        init()
      }

      window.addEventListener('beforeunload', destroyViewer)
    })
  }
}
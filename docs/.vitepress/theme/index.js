import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      import('viewerjs').then(({ default: Viewer }) => {
        let viewerInstance = null
        let observer = null

        // 销毁旧实例
        const destroyViewer = () => {
          if (viewerInstance) {
            viewerInstance.destroy()
            viewerInstance = null
          }
        }

        // 初始化图片监听
        const initImageObserver = () => {
          destroyViewer()

          const container = document.querySelector('.content-container')
          if (!container) return

          // 使用 MutationObserver 监听DOM变化
          observer = new MutationObserver((mutations) => {
            const hasAddedNodes = mutations.some(m => m.addedNodes.length > 0)
            if (hasAddedNodes) {
              setupViewer(container)
            }
          })

          observer.observe(container, {
            childList: true,
            subtree: true
          })

          // 初始设置
          setupViewer(container)
        }

        // 设置查看器实例
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
              return !image.closest('.exclude-zoom') // 排除特定图片
            }
          })

          // 添加悬停提示
          container.querySelectorAll('img').forEach(img => {
            if (!img.classList.contains('zoom-initialized')) {
              img.title = '双击查看大图 | 悬停放大'
              img.classList.add('zoom-initialized')
            }
          })
        }

        // 路由变化处理
        const handleRouteChange = () => {
          if (observer) observer.disconnect()
          initImageObserver()
        }

        // 初始化
        setTimeout(handleRouteChange, 500)
        
        // 事件监听
        window.addEventListener('vitepress:route-change', handleRouteChange)
        window.addEventListener('beforeunload', destroyViewer)
      })
    }
  }
}
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      import('viewerjs').then(({ default: Viewer }) => {
        let viewerInstance = null
        
        const initViewer = () => {
          // 销毁旧实例
          if (viewerInstance) {
            viewerInstance.destroy()
          }
          
          // 创建新实例
          const container = document.querySelector('.content-container')
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
            // 关键配置：启用单击触发
            trigger: 'click',
            // 隐藏默认工具栏按钮
            builtinButtons: {
              zoomIn: true,
              zoomOut: true,
              oneToOne: true,
              reset: true,
              rotateLeft: true,
              rotateRight: true,
            }
          })

          // 添加双击提示
          const images = document.querySelectorAll('.content-container img')
          images.forEach(img => {
            img.title = '单击查看大图 | 悬停放大效果'
          })
        }

        // 初始化
        setTimeout(initViewer, 500)
        // 路由切换后重新初始化
        window.addEventListener('vitepress:route-change', () => {
          setTimeout(initViewer, 300)
        })
      })
    }
  }
}
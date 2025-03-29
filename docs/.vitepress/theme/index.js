import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      import('viewerjs').then(({ default: Viewer }) => {
        const initViewer = () => {
          const images = document.querySelectorAll('.content-container img')
          
          images.forEach(img => {
            // 保留原有双击功能
            img.ondblclick = () => {
              new Viewer(img, {
                inline: false,
                toolbar: {
                  zoomIn: 1,
                  zoomOut: 1,
                  oneToOne: 1,
                  reset: 1,
                  rotateLeft: 1,
                  rotateRight: 1,
                },
              }).show()
            }

            // 添加悬停提示效果
            img.title = '双击查看大图 | 悬停放大'
          })
        }

        setTimeout(initViewer, 500)
        window.addEventListener('vitepress:route-change', initViewer)
      })
    }
  }
}
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  easing: 'ease', // 動畫方式
  speed: 500, // 遞增進度條的速度
  showSpinner: true, // 是否顯示加載ico
  trickleSpeed: 200, // 自動遞增間隔
  minimum: 0.3 // 初始化時的最小百分比
})

export default NProgress

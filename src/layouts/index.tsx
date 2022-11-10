import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import LayoutHeader from './components/Header'
import LayoutFooter from './components/Footer'
import './index.less'
import { updateCollapse } from '@/redux/modules/menu/action'

const LayoutIndex = (props: any) => {
  const { Sider, Content } = Layout

  const { isCollapse, updateCollapse } = props

  // 监听窗口大小变化
  const listeningWindow = () => {
    window.onresize = () => {
      return (() => {
        let screenWidth = document.body.clientWidth
        if (!isCollapse && screenWidth < 1200) updateCollapse(true)
        if (!isCollapse && screenWidth > 1200) updateCollapse(false)
      })()
    }
  }

  useEffect(() => {
    listeningWindow()
  }, [])

  return (
    // 这里不用 Layout 组件原因是切换页面时样式会先错乱然后在正常显示，造成页面闪屏效果
    <section className="container">
      <Sider trigger={null} collapsed={props.isCollapse} width={220} theme="dark"></Sider>
      <Layout>
        <LayoutHeader></LayoutHeader>
        <Content>
          <Outlet></Outlet>
        </Content>
        <LayoutFooter></LayoutFooter>
      </Layout>
    </section>
  )
}

const mapStateToProps = (state: any) => state.menu
const mapDispatchToProps = { updateCollapse }
export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex)

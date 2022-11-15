import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import LayoutHeader from './components/Header'
import LayoutFooter from './components/Footer'
import './index.less'

const LayoutIndex = () => {
  const { Content } = Layout

  return (
    // 这里不用 Layout 组件原因是切换页面时样式会先错乱然后在正常显示，造成页面闪屏效果
    <section className="container">
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

export default LayoutIndex

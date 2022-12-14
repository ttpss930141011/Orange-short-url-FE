import { Layout } from 'antd'
import AvatarIcon from './components/AvatarIcon'
import AssemblySize from './components/AssemblySize'
import Language from './components/Language'
import Theme from './components/Theme'
import './index.less'

const LayoutHeader = () => {
  const { Header } = Layout

  return (
    <Header>
      <div className="header-lf"></div>
      <div className="header-ri">
        <AssemblySize />
        <Language />
        <Theme />
        <span className="username">Hooks</span>
        <AvatarIcon />
      </div>
    </Header>
  )
}

export default LayoutHeader

import { Drawer, Divider, Switch } from 'antd'
import { useState } from 'react'
import { connect } from 'react-redux'
import { FireOutlined, SettingOutlined } from '@ant-design/icons'
import { setThemeConfig } from '@/redux/modules/global/action'
import SwitchDark from '@/components/SwitchDark'

const Theme = (props: any) => {
  const [visible, setVisible] = useState<boolean>(false)
  const { setThemeConfig } = props
  const { themeConfig } = props.global
  const { weakOrGray, footer } = themeConfig

  const setWeakOrGray = (checked: boolean, theme: string) => {
    if (checked) return setThemeConfig({ ...themeConfig, weakOrGray: theme })
    setThemeConfig({ ...themeConfig, weakOrGray: '' })
  }

  const onChange = (checked: boolean, keyName: string) => {
    return setThemeConfig({ ...themeConfig, [keyName]: !checked })
  }

  return (
    <>
      <i
        className="icon-style iconfont icon-zhuti"
        onClick={() => {
          setVisible(true)
        }}
      ></i>
      <Drawer
        title="佈局設置"
        closable={false}
        onClose={() => {
          setVisible(false)
        }}
        visible={visible}
        width={320}
      >
        {/* 全局主題 */}
        <Divider className="divider">
          <FireOutlined />
          全局主題
        </Divider>
        <div className="theme-item">
          <span>暗黑模式</span>
          <SwitchDark />
        </div>
        <div className="theme-item">
          <span>灰色模式</span>
          <Switch
            checked={weakOrGray === 'gray'}
            onChange={(e) => {
              setWeakOrGray(e, 'gray')
            }}
          />
        </div>
        <div className="theme-item">
          <span>色弱模式</span>
          <Switch
            checked={weakOrGray === 'weak'}
            onChange={(e) => {
              setWeakOrGray(e, 'weak')
            }}
          />
        </div>
        <br />
        {/* 界面設置 */}
        <Divider className="divider">
          <SettingOutlined />
          界面設置
        </Divider>

        <div className="theme-item">
          <span>頁腳</span>
          <Switch
            checked={!footer}
            onChange={(e) => {
              onChange(e, 'footer')
            }}
          />
        </div>
      </Drawer>
    </>
  )
}

const mapStateToProps = (state: any) => state
const mapDispatchToProps = { setThemeConfig }
export default connect(mapStateToProps, mapDispatchToProps)(Theme)

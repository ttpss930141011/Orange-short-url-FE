import { Avatar, Modal, Menu, Dropdown, message } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/config'
import { connect } from 'react-redux'
import { setToken } from '@/redux/modules/global/action'
import avatar from '@/assets/images/avatar.png'

const AvatarIcon = (props: any) => {
  const { setToken } = props
  const navigate = useNavigate()

  // 退出登錄
  const logout = () => {
    Modal.confirm({
      title: '溫馨提示 🧡',
      icon: <ExclamationCircleOutlined />,
      content: '是否確認退出登錄？ ',
      okText: '確認',
      cancelText: '取消',
      onOk: () => {
        setToken('')
        message.success('退出登錄成功！')
        navigate('/login')
      }
    })
  }

  // Dropdown Menu
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <span className="dropdown-item">首頁</span>,
          onClick: () => navigate(HOME_URL)
        },
        {
          type: 'divider'
        },
        {
          key: '2',
          label: <span className="dropdown-item">退出登錄</span>,
          onClick: logout
        }
      ]}
    ></Menu>
  )
  return (
    <>
      <Dropdown overlay={menu} placement="bottom" arrow trigger={['click']}>
        <Avatar size="large" src={avatar} />
      </Dropdown>
    </>
  )
}

const mapDispatchToProps = { setToken }
export default connect(null, mapDispatchToProps)(AvatarIcon)

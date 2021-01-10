import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import {
  HomeOutlined,
  AppstoreOutlined,
  BugOutlined
} from '@ant-design/icons'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const { Sider } = Layout
const { SubMenu } = Menu

class Side extends Component {
  state = {
    selectedKeys: [],
    openKeys: []
  }
  menus = [
    {
      path: '/home',
      name: 'Home',
      icon: <HomeOutlined />,
      title: '首页'
    },
    {
      path: '/components',
      name: 'Components',
      icon: <AppstoreOutlined />,
      title: '组件',
      children: [
        { path: '/components/editor', name: 'Editor', title: '富文本编辑器' },
        { path: '/components/video', name: 'Video', title: '视频播放器' },
        { path: '/components/verify', name: 'Verify', title: '滑动验证码' }
      ]
    },
    {
      path: '/error-page',
      name: 'ErrorPage',
      icon: <BugOutlined />,
      title: '错误页'
    }
  ]

  // 页面刷新的时候可以定位到 menu 显示
  componentDidMount() {
    const { pathname } = this.props.location
    this.setState({
      selectedKeys: [pathname],
      openKeys: this.getOpenKeys(pathname)
    })
  }

  getOpenKeys = (path) => {
    const tmpArr = path.split('/').slice(1).map(e => `/${e}`)
    const found = this.menus.find(e => e.path === tmpArr[0])
    let arr = []
    if(found.children) {
      let str = ''
      for(let i = 0; i <tmpArr.length; i++) {
        str += tmpArr[i]
        arr.push(str)
      }
    }
    return arr
  }

  onOpenChange = (openKeys) => {
    this.setState({
      openKeys
    })
  }

  renderMenuItem = ({ name, path, title, icon }) => (
    <Menu.Item key={ path }>
      <Link to={ path }>
        { icon }
        <span>{ title }</span>
      </Link>
    </Menu.Item>
  )

  renderSubMenu = ({ name, path, title, children, icon }) => (
    <SubMenu key={ path } title={ title } icon={ icon }>
      {
        children && children.map(item => {
          return (
            item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          )
        })
      }
    </SubMenu>
  )

  render() {
    const { selectedKeys, openKeys } = this.state
    const { menuToggle } = this.props
    return (
      <Sider
        className="side"
        trigger={null}
        collapsed={ menuToggle }
        collapsible
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          openKeys={ openKeys }
          selectedKeys={ selectedKeys }
          onClick={ ({ key }) => this.setState({ selectedKeys: [key] }) }
          onOpenChange={ this.onOpenChange }
        >
          {
            this.menus.map(item => {
              return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
            })
          }
        </Menu>
      </Sider>
    )
  }
}

// 把store中的数据映射到组件的props
const mapStateToProps = state => ({
  menuToggle: state.layout.menuToggle
})

export default withRouter(
  connect(
    mapStateToProps
  )(Side)
)
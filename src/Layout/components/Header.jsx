import React, { Component } from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'
import { menuToggleAction } from '../store/actionCreators'
import { Avatar, Menu, Dropdown } from 'antd'
import { getRandom } from '@/utils'

class Header extends Component {
  state = {
    colorList: ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'],
    dropdownMenu: [
      { name: 'userCenter', title: '个人中心'},
      { name: 'logout', title: '退出登录'}
    ]
  }

  getColor = () => {
    const random = getRandom(0, 3)
    return this.state.colorList[random]
  }

  menu = () => (
    <Menu>
      {
        this.state.dropdownMenu.map(item => (
          <Menu.Item key={ item.name } style={{textAlign: 'center'}}>
            { item.title }
          </Menu.Item>
        ))
      }
    </Menu>
  )

  render() {
    const { menuToggle, toggleCollapsed } = this.props
    return (
      <div className='header'>
        <span onClick={ () => toggleCollapsed(menuToggle) }>
          {
            menuToggle ? <MenuUnfoldOutlined className='toggle-btn'/> : <MenuFoldOutlined className='toggle-btn'/>
          }
        </span>
        <Dropdown className='user-setting' overlay={ this.menu() } arrow>
          <div style={{display:'flex', alignItems: 'center'}}>
            <Avatar style={{ backgroundColor: this.getColor(), verticalAlign: 'middle' }} size="large">
              admin
            </Avatar>
            <div className='user-setting-dropdown' onClick={e => e.preventDefault()}>
              admin <DownOutlined />
            </div>
          </div>
        </Dropdown>
      </div>
    )
  }
}

// 把store中的数据映射到组件的props
const mapStateToProps = state => ({
  menuToggle: state.layout.menuToggle
})

// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch) => ({
  toggleCollapsed(data) {
    dispatch(menuToggleAction(!data))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
import React, { Component } from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'
import { menuToggleAction, headerFixedAction } from '../store/actionCreators'
import { Avatar, Menu, Dropdown, Switch } from 'antd'
import { getRandom } from '@/utils'
import NavTab from '@/components/NavTab'

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

  switchChange = (checked) => {
    this.props.switchHeaderFixed(checked)
  }

  render() {
    const { menuToggle, toggleCollapsed, headerFixed } = this.props
    return (
      <div
        className={
          `header
          ${headerFixed && 'header-fix'}
          ${menuToggle && 'side-collapsed-header'}`
        }
      >
        <span onClick={ () => toggleCollapsed(menuToggle) }>
          {
            menuToggle ? <MenuUnfoldOutlined className='toggle-btn'/> : <MenuFoldOutlined className='toggle-btn'/>
          }
        </span>
        <Switch
          checked={ headerFixed }
          className='fix-switch'
          checkedChildren="fixed"
          unCheckedChildren="unfix"
          onChange={ this.switchChange }
        />
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
        <NavTab />
      </div>
    )
  }
}

// 把store中的数据映射到组件的props
const mapStateToProps = state => ({
  menuToggle: state.layout.menuToggle,
  headerFixed: state.layout.headerFixed
})

// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch) => ({
  toggleCollapsed(data) {
    dispatch(menuToggleAction(!data))
  },
  switchHeaderFixed(data) {
    dispatch(headerFixedAction(data))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
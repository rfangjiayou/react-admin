import React, { Component } from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import { connect } from 'react-redux'
import { menuToggleAction } from '../store/actionCreators'

class Header extends Component {
  render() {
    const { menuToggle, toggleCollapsed } = this.props
    return (
      <div className='header'>
        <span onClick={ () => toggleCollapsed(menuToggle) }>
          {
            menuToggle ? <MenuUnfoldOutlined className='toggle-btn'/> : <MenuFoldOutlined className='toggle-btn'/>
          }
        </span>
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
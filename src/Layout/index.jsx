import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import routes from '@/routes'
import { Layout } from 'antd'
import Header from './components/Header'
import Side from './components/Side'
import '@/styles/layout.scss'
import { connect } from 'react-redux'

const { Content } = Layout

class BaseLayout extends Component {
  render() {
    const { menuToggle } = this.props
    return (
      <Layout className="layout">
        <Side />
        <Layout className={`right ${menuToggle ? 'side-collapsed' : null}`}>
          <Header />
          <Content>
            <Switch>
              {
                routes.map(item => {
                  return (
                    <Route
                      key={item.path}
                      path={item.path}
                      exact={item.exact}
                      render={props =>
                        (
                          <item.component {...props} />
                        ) 
                      }
                    />
                  )
                })
              }
              <Redirect to='/404' />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  menuToggle: state.layout.menuToggle
})

export default withRouter(
  connect(
    mapStateToProps
  )(BaseLayout)
)
import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { loadable } from '@/utils'

const Login = loadable(() => import(/* webpackChunkName: 'Login' */ './views/Login'))
const BaseLayout = loadable(() => import(/* webpackChunkName: 'Layout' */ './Layout'))

const App = () => (
  <HashRouter>
    <Switch>
      <Route path='/' exact render={ () => <Redirect to='/home' /> } />
      <Route path='/login' component={ Login } />
      <Route component={ BaseLayout } />
    </Switch>
  </HashRouter>
)

export default App

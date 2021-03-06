import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Admin from './pages/admin/admin.jsx'
import Login from './pages/login/login.jsx'

/* 
应用根组件
*/
export default class App extends Component {

  render () {
    return (
      <BrowserRouter>
        <Switch>
          {/* 注册路由 */}
          <Route path="/login" component={Login}/>
          <Route path="/" component={Admin}/> 
        </Switch>
      </BrowserRouter>
      )
  }
}


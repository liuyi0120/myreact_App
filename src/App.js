import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'


export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/' component={Login}/>
        <Route path='/admin' component={Admin}/>
      </Switch>
    </BrowserRouter>

    )
  }
}


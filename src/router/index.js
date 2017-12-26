import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AlertView } from '../components'
import { Home , Register, Login } from '../container'
export default class router extends Component{
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/test' component={AlertView} />
        </Switch>
      </Router>
    )
  }
}
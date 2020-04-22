import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import Repository from '../repository/Repository'
export default () => (
  <BrowserRouter>
    <Switch>
      <Route component={Dashboard} path='/dashboard'></Route>
      <Route component={Repository} path='/repository/:repositoryName+'></Route>
      <Route component={Dashboard}></Route>
    </Switch>
  </BrowserRouter>
)

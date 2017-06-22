'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

import store from './redux/store'
import Toolbar from './components/Toolbar'
import Table from './components/Table'

const history = createBrowserHistory()

const App = ({children}) => (
  <div id="app-container">
    <Toolbar />
    <Table />
    {children}
  </div>
)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

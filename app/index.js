'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

import store from './redux/store'
import Toolbar from './components/Toolbar'
import SearchableProductsContainer from './components/SearchableProductsContainer'

const history = createBrowserHistory()

const App = ({children}) => (
  <div id="app-container">
    <Toolbar />
    <SearchableProductsContainer />
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

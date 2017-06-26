'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

import store from './redux/store'
import Toolbar from './components/Toolbar'
import SearchableProductsContainer from './components/SearchableProductsContainer'
import '../public/style.css'

const history = createBrowserHistory()

const App = () => (
  <div id="app-container">
    <Toolbar />
    <SearchableProductsContainer />
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

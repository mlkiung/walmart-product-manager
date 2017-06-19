'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

import store from './redux/store'
import Toolbar from './components/Toolbar'
import ProductsList from './components/ProductsList'
import { loadProducts } from './redux/search'

const history = createBrowserHistory()

const onAppEnter = () => {
  const localStorage = window.localStorage.getItem('reduxState')
  localStorage && store.dispatch(loadProducts(localStorage))

  // store.dispatch(loadProducts(JSON.stringify(localStorage.getItem('reduxState'))))
}

const App = ({children}) => (
  <div id="app-container">
    <Toolbar />
    <ProductsList />
    {children}
  </div>
)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} onEnter={onAppEnter} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

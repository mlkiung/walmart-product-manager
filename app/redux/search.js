import store from './store'

// action creator
const receiveProducts = (data) => {
  console.log('products in action creator', data)
  store.dispatch(loadProducts(data[1]))
  store.dispatch(loadQuery(data[0]))
  // need query????
}

// constant
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const LOAD_QUERY = 'LOAD_QUERY'

// action
const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  products
})

const loadQuery = (query) => ({
  type: LOAD_QUERY,
  query
})

export { receiveProducts, LOAD_PRODUCTS, LOAD_QUERY }

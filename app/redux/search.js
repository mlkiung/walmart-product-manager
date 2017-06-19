import store from './store'

// action creator
const receiveProducts = (products) => loadProducts(products)

// constant
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

// action
const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products
})

export { receiveProducts, LOAD_PRODUCTS }

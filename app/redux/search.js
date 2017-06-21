import store from './store'

// action creator
const receiveProducts = (products) => {
  console.log('products in action creator', products)
  store.dispatch(loadProducts(products))
}

// constant
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

// action
const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  products
})

export { receiveProducts, LOAD_PRODUCTS }

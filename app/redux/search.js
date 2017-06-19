import store from './store'

const receiveProducts = (products) => {
  store.dispatch(loadProducts(products))
}

const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products
})

export { receiveProducts, LOAD_PRODUCTS }

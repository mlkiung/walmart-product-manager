import store from './store'

const getStorage = () => {
  const products = {}

  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i)
    const value = JSON.parse(window.localStorage.getItem(key))
    products[key] = value
  }

  return products
}
// utils
const receiveProducts = (data) => {
  console.log('products in action creator', data)
  store.dispatch(loadProducts(data[1]))
  store.dispatch(loadQuery(data[0]))
}

const getAllProducts = () => {
  store.dispatch(loadAllProducts(getStorage()))
}

const deleteProduct = (itemId) => {
  window.localStorage.removeItem(itemId)
  store.dispatch(loadAllProducts(getStorage()))
}

const updateBrand = (itemId, brand) => {
  const item = JSON.parse(window.localStorage.getItem(itemId))
  item.brandName = brand
  window.localStorage.setItem(itemId, item)
  store.dispatch(loadAllProducts(getStorage()))
}

// constants
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS'
const LOAD_QUERY = 'LOAD_QUERY'

// action creators
const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  products
})

const loadAllProducts = (products) => ({
  type: LOAD_ALL_PRODUCTS,
  products
})

const loadQuery = (query) => ({
  type: LOAD_QUERY,
  query
})

export { receiveProducts, getAllProducts, deleteProduct, LOAD_PRODUCTS, LOAD_QUERY, LOAD_ALL_PRODUCTS }

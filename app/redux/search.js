import store from './store'

const getStorage = () => {
  return new Promise((resolve, reject) => {
    const products = {}

    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i)
      const value = JSON.parse(window.localStorage.getItem(key))
      products[key] = value
    }

    resolve(products)
    reject(new Error('Error retrieving products from localStorage!'))
  })
}

const receiveProducts = (data) => {
  console.log('products in action creator', data)
  store.dispatch(loadProducts(data[1]))
  store.dispatch(loadQuery(data[0]))
}

const getAllProducts = () => {
  const products = getStorage()
  products.then((products) => {
    loadAllProducts(products)
  }).catch(console.error)
}

const deleteProduct = (itemId) => {
  const remove = new Promise((resolve, reject) => {
    const l1 = localStorage.length
    const r = localStorage.removeItem(itemId)
    const l2 = localStorage.length
    resolve(l1 !== l2)
    reject(new Error('Item has not been removed from localStorage'))
  })

  remove.then(() => {
    store.dispatch(removeProduct(itemId))
  }).catch(console.error)
}

const updateBrand = (itemId, brand) => {
  console.log('itemId', itemId)
  const item = JSON.parse(window.localStorage.getItem(itemId))
  item.brandName = brand
  window.localStorage.setItem(itemId, JSON.stringify(item))
  const storage = getStorage()
  storage.then((updatedProducts) => store.dispatch(reloadBrand(updatedProducts))).catch(console.error)
}

// constants
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS'
const LOAD_QUERY = 'LOAD_QUERY'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const RELOAD_BRAND = 'RELOAD_BRAND'

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

const removeProduct = (itemId) => ({
  type: REMOVE_PRODUCT,
  itemId
})

const reloadBrand = (updatedProducts) => ({
  type: RELOAD_BRAND,
  updatedProducts
})

export { receiveProducts, getAllProducts, deleteProduct, updateBrand, LOAD_PRODUCTS, LOAD_QUERY, LOAD_ALL_PRODUCTS, REMOVE_PRODUCT, RELOAD_BRAND }

import store from './store'

const getStorage = () => {
  return new Promise((resolve, reject) => {
    const products = {}
    const productsArr = []
    const resultArr = []

    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i)
      const value = JSON.parse(window.localStorage.getItem(key))
      products[key] = value
      productsArr.push(value)
    }
    resultArr.push(products, productsArr)
    resolve(resultArr)
    reject(new Error('Error retrieving products from localStorage!'))
  })
}

// get products from API
const receiveProducts = (data) => {
  store.dispatch(loadProducts(data[1], data[2]))
  store.dispatch(loadQuery(data[0]))
}

const getAllProducts = () => {
  const results = getStorage()
  results.then((results) => {
    const products = results[0], productsArr = results[1]
    store.dispatch(loadAllProducts(products, productsArr))
  }).catch(console.error)
}

const deleteProduct = (itemId) => {
  const remove = new Promise((resolve, reject) => {
    const l1 = window.localStorage.length
    const r = window.localStorage.removeItem(itemId)
    const l2 = window.localStorage.length
    resolve(l1 !== l2)
    reject(new Error('Item has not been removed from localStorage'))
  })

  remove.then(() => {
    const itemIdForObj = itemId, itemIdNum = +itemId
    store.dispatch(removeProduct(itemIdForObj, itemIdNum))
  }).catch(console.error)
}

const updateBrand = (itemId, brand) => {
  const item = JSON.parse(window.localStorage.getItem(itemId))
  item.newBrandName = brand
  window.localStorage.setItem(itemId, JSON.stringify(item))
  getAllProducts()
  // store.dispatch(loadNewBrand())
}

const deleteRepository = () => {
  window.localStorage.setItem('productsArr', JSON.stringify([]))
  window.localStorage.setItem('products', JSON.stringify({}))
  const productsArr = JSON.parse(window.localStorage.getItem('productsArr'))
  const products = JSON.parse(window.localStorage.getItem('products'))
  store.dispatch(removeRepository(productsArr, products))
}

const searchProducts = (term) => {
  return ''
}

const sortByName = (orderAToZ, productsArr) => {
  orderAToZ ? store.dispatch(sortAZ(productsArr)) : store.dispatch(sortZA(productsArr))
}

// constants
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS'
const LOAD_QUERY = 'LOAD_QUERY'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const RELOAD_BRAND = 'RELOAD_BRAND'
const REMOVE_REPOSITORY = 'REMOVE_REPOSITORY'
const SORT_AZ = 'SORT_AZ'
const SORT_ZA = 'SORT_ZA'

// action creators
const loadProducts = (products, productsArr) => ({
  type: LOAD_PRODUCTS,
  products,
  productsArr
})

const loadAllProducts = (products, productsArr) => ({
  type: LOAD_ALL_PRODUCTS,
  products,
  productsArr
})

const loadQuery = (query) => ({
  type: LOAD_QUERY,
  query
})

const removeProduct = (itemIdForObj, itemId) => ({
  type: REMOVE_PRODUCT,
  itemIdForObj,
  itemId
})

const reloadBrand = (updatedProducts) => ({
  type: RELOAD_BRAND,
  updatedProducts
})

const removeRepository = (productsArr, products) => ({
  type: REMOVE_REPOSITORY,
  productsArr,
  products
})

const sortAZ = (productsArr) => ({
  type: SORT_AZ,
  productsArr
})

const sortZA = (productsArr) => ({
  type: SORT_ZA,
  productsArr
})

export { receiveProducts, getAllProducts, deleteProduct, updateBrand, deleteRepository, searchProducts, sortByName, LOAD_PRODUCTS, LOAD_QUERY, LOAD_ALL_PRODUCTS, REMOVE_PRODUCT, RELOAD_BRAND, REMOVE_REPOSITORY, SORT_AZ, SORT_ZA }

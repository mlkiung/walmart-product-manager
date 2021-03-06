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
  const query = data[0], products = data[1], productsArr = data[2]
  store.dispatch(loadProducts(products, productsArr))
  store.dispatch(loadQuery(query))
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
}

const deleteRepository = () => {
  const productsArr = [], products = {}
  store.dispatch(removeRepository(productsArr, products))
  window.localStorage.clear()
}

const sortAbc = (sortDir, productsArr) => {
  sortDir ? store.dispatch(sortAZ(productsArr)) : store.dispatch(sortZA(productsArr))
}

const sort123 = (sortDir, productsArr, sortName) => {
  sortDir ? store.dispatch(sortAsc(productsArr, sortName)) : store.dispatch(sortDesc(productsArr, sortName))
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
const SORT_ASC = 'SORT_ASC'
const SORT_DESC = 'SORT_DESC'

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

const sortAsc = (productsArr, sortName) => ({
  type: SORT_ASC,
  productsArr,
  sortName
})

const sortDesc = (productsArr, sortName) => ({
  type: SORT_DESC,
  productsArr,
  sortName
})

export { receiveProducts, getAllProducts, deleteProduct, updateBrand, deleteRepository, sortAbc, sort123, LOAD_PRODUCTS, LOAD_QUERY, LOAD_ALL_PRODUCTS, REMOVE_PRODUCT, RELOAD_BRAND, REMOVE_REPOSITORY, SORT_AZ, SORT_ZA, SORT_ASC, SORT_DESC }

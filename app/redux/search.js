import { makeQueryString } from '../utils'

const receiveProducts = (query) => {
  const queryString = makeQueryString(query)
  console.log('QUERY STRING IN ACTION CREATOR', queryString)
  // do the jsonp axios request
  // products are returned
  // call dispatch(loadProducts(productsFromJSONP))
}

const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products
})

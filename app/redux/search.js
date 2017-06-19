import { makeQueryString } from '../utils'
import jsonp from 'jsonp'

const receiveProducts = (query) => {
  // query is an object!
  const queryString = makeQueryString(query)
  console.log('QUERY STRING IN ACTION CREATOR', queryString)
  const cb = (err, data) => {
    if (err) console.error('HERE IS THE ERROR')
    else console.log(data)
  }
  // do the jsonp axios request
  // products are returned
  // call dispatch(loadProducts(productsFromJSONP))
}

const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products
})

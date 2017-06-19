// import { makeQueryString } from '../utils'
import store from './store'

// import data from '../../dummyData'

const receiveProducts = (products) => {
  store.dispatch(loadProducts(products))
}

const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products
})

export default { receiveProducts, LOAD_PRODUCTS }

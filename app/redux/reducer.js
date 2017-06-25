import store from './store'
import { LOAD_PRODUCTS, LOAD_ALL_PRODUCTS, LOAD_QUERY, REMOVE_PRODUCT, RELOAD_BRAND, REMOVE_REPOSITORY } from './search'

const initialState = {}

const reducer = (state = initialState, action) => {

  switch (action.type) {
  case LOAD_PRODUCTS:
    return { ...state, products: action.products, productsArr: action.productsArr }

  case LOAD_ALL_PRODUCTS:
    return { ...state, products: action.products, productsArr: action.productsArr }

  case LOAD_QUERY:
    return { ...state, query: action.query }

  case REMOVE_PRODUCT:
    return {...state,
      products: Object.keys(state.products)
        .filter((itemId) => state.products[action.itemId].itemId.toString() !== itemId)
        .reduce((obj, id) => {
          obj[id] = state.products[id]
          return obj
        }, {}),
      productsArr: state.productsArr.filter(product => product.itemId !== action.itemId)
    }

  case RELOAD_BRAND:
    return { ...state, products: action.products }

  case REMOVE_REPOSITORY:
    return { ...state, ...action.products, ...action.productsArr }

  default: return state
  }
}

export default reducer

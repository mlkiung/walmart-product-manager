import store from './store'
import {LOAD_PRODUCTS, LOAD_ALL_PRODUCTS, LOAD_QUERY, REMOVE_PRODUCT} from './search'

const initialState = {}

const reducer = (state = initialState, action) => {
  console.log('action', action)

  switch (action.type) {
  case LOAD_PRODUCTS:
    // return Object.assign({}, state, action)
    return { ...state, products: action }

  case LOAD_ALL_PRODUCTS:
    return { ...state, products: action }

  case LOAD_QUERY:
    return { ...state, products: action }

  case REMOVE_PRODUCT:
    return Object.assign({}, state, {
      products: Object.keys(state.products)
        .filter((itemId) => state.products[action.itemId].itemId.toString() !== itemId)
        .reduce((obj, id) => {
          obj[id] = state.products[id]
          return obj
        }, {})
    })

  default: return state
  }
}

export default reducer

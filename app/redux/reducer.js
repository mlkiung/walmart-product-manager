import store from './store'
import { LOAD_PRODUCTS, LOAD_ALL_PRODUCTS, LOAD_QUERY } from './search'

const initialState = {}

const reducer = (state = initialState, action) => {
  console.log('action', action)

  switch (action.type) {

    case LOAD_PRODUCTS:
      return Object.assign({}, state, action)

    case LOAD_ALL_PRODUCTS:
      return Object.assign({}, state, action)

    case LOAD_QUERY:
      return Object.assign({}, state, action)

    default: return state
  }
}

export default reducer

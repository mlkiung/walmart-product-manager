import store from './store'
import { LOAD_PRODUCTS } from './search'

const initialState = {}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state, action.payload)

  switch (action.type) {
    case LOAD_PRODUCTS: return newState
    default: return state
  }
}

export default reducer

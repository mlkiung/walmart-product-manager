import store from './store'
import { LOAD_PRODUCTS } from './search'

const initialState = {}

const reducer = (state = initialState, action) => {
  console.log('action', action)

  switch (action.type) {

    case LOAD_PRODUCTS:
      return Object.assign({}, state, { query: action[0], products: action[1] })

    default: return state
  }
}

export default reducer

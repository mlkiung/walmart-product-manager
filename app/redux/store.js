import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { getState, saveState } from '../../localStorage'

const persistedState = getState()

// store.subscribe(() => {
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })

const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware(createLogger({ collapsed: true }),
    thunkMiddleware))
)

store.subscribe(() => {
  saveState()
})
// saveState()

export default store

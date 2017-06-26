import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { getState, saveState } from '../../localStorage'

const persistedState = getState()

const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware(createLogger({ collapsed: true }),
    thunkMiddleware))
)

// any time an action is dispatched, saveState() will be called
store.subscribe(() => saveState())

export default store

import store from './app/redux/store'

const localStorage = window.localStorage

/* ~~~~~~~~~~ GET STATE FROM LOCAL STORAGE ~~~~~~~~~~ */
const getState = () => {
  const persistedState = JSON.parse(localStorage.getItem('reduxState'))

  // check to make sure its there
  persistedState
    && console.log('persistedState is loaded from localStorage', persistedState)
  return persistedState
}

/* ~~~~~~~~~~ SAVE REDUX STATE TO LOCAL STORAGE ~~~~~~~~~~ */
const saveState = () => {
  const redux = store.getState() // new state to be stored
  console.log('reduxstate for merging into localstorage', redux)
  const storage = JSON.parse(localStorage.getItem('reduxState')) // state already in storage
  console.log('storage', storage)

  // merge new state and old state
  // const newState = Object.assign({}, persistedState, reduxState)
  const merge = Object.assign({}, storage, redux)

  // const copy = JSON.parse(JSON.stringify(merge))

  // set localStorage to new value
  merge
    && localStorage.setItem('reduxState', JSON.stringify(merge))
}

export { getState, saveState }

import store from './app/redux/store'

const localStorage = window.localStorage

/* ~~~~~~~~~~ GET STATE FROM LOCAL STORAGE ~~~~~~~~~~ */
const getState = () => {
  const initialState = {products: {}}
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = JSON.parse(localStorage.getItem(key))
    initialState.products[key] = value
  }
  // const persistedState = JSON.parse(localStorage.getItem('reduxState'))

  // check to make sure its there
  initialState && console.log('persistedState is loaded from localStorage', initialState)
  return initialState
}

/* ~~~~~~~~~~ SAVE REDUX STATE TO LOCAL STORAGE ~~~~~~~~~~ */
const saveState = () => {
  const redux = store.getState().products // new state to be stored
  // console.log('reduxstate for merging into localstorage', redux)
  // const storage = JSON.parse(localStorage.getItem('reduxState')) // state already in storage
  // console.log('storage', storage)

  // merge new state and old state
  // const newState = Object.assign({}, persistedState, reduxState)
  // const merge = Object.assign({}, storage.products, redux.products)
  for (let itemId in redux) {
    console.log('itemId: ', itemId)
    localStorage.setItem(itemId, JSON.stringify(redux[itemId]))
  }

  // const copy = JSON.parse(JSON.stringify(merge))

  // set localStorage to new value
  // merge
    // && localStorage.setItem('reduxState', JSON.stringify(merge))
}

export { getState, saveState }

import store from './app/redux/store'
import { getAllProducts } from './app/redux/search'

const localStorage = window.localStorage

/* ~~~~~~~~~~ GET STATE FROM LOCAL STORAGE ~~~~~~~~~~ */
const getState = () => {
  const initialState = { products: {} }

  if (localStorage.length) {
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = localStorage.key(i)
      const value = JSON.parse(localStorage.getItem(key))
      initialState.products[key] = value
    }
  }

  return initialState
}

/* ~~~~~~~~~~ SAVE REDUX STATE TO LOCAL STORAGE ~~~~~~~~~~ */
const saveState = () => {
  const redux = store.getState().products

  for (const itemId in redux) {
    localStorage.setItem(itemId, JSON.stringify(redux[itemId]))
  }
}

export { getState, saveState }

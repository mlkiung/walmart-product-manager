import store from './app/redux/store'
import { getAllProducts } from './app/redux/search'

const localStorage = window.localStorage

/* ~~~~~~~~~~ GET INITIAL STATE FROM LOCAL STORAGE ~~~~~~~~~~ */
const getState = () => {
  const initialState = { products: {}, productsArr: [] }

  if (localStorage.length) {
    for (let i = 0; i < window.localStorage.length; i++) {
      const itemId = localStorage.key(i)
      const productObj = JSON.parse(localStorage.getItem(itemId))
      initialState.products[itemId] = productObj
      initialState.productsArr.push(productObj)
    }
  }

  return initialState
}

/* ~~~~~~~~~~ SAVE STATE TO LOCALSTORAGE ANY TIME ACTION DISPATCHED~~~~~~~~~~ */
const saveState = () => {
  const products = store.getState().products

  for (const itemId in products) {
    localStorage.setItem(itemId, JSON.stringify(products[itemId]))
  }
}

export { getState, saveState }

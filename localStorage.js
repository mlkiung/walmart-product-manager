import store from './app/redux/store'

const localStorage = window.localStorage

/* ~~~~~~~~~~ GET STATE FROM LOCAL STORAGE ~~~~~~~~~~ */
const getState = () => {
  const persistedState = JSON.parse(localStorage.getItem('reduxState'))

  // persistedState && JSON.stringify(persistedState)

  // check to make sure its there
  persistedState
    && console.log('persistedState is loaded from localStorage', persistedState)
  return persistedState
}

/* ~~~~~~~~~~ SAVE REDUX STATE TO LOCAL STORAGE ~~~~~~~~~~ */
const saveState = () => {
  const reduxState = store.getState() // new state to be stored
  const persistedState = JSON.parse(localStorage.getItem('reduxState')) // state already in storage

  // merge new state and old state
  const newState = Object.assign({}, reduxState, persistedState)

  // set localStorage to new value
  newState
    && localStorage.setItem('reduxState', JSON.stringify(newState))

  // check to make sure it's saved
  const newPersistedState = localStorage.getItem('reduxState')
  newPersistedState
    && console.log('reduxState is saved in localStorage')

  // DEBUG: double check for duplicates
  // newPersistedState
  //   && checkForDuplicates(newPersistedState)
}

/* ~~~~~~~~~~ CHECK FOR DUPLICATES ~~~~~~~~~~ */
/*
Need to check for 'name' duplicates in dataset; 10MB localStorage; order doesn't matter

If a duplicate entry is found in localStorage, need to check if the entry has update information.
If it does, overwrite localStorage. Else, skip over it.
*/

// const checkForDuplicates = (state) => {
//   const products = state['items'] // an array of the products listings
//   products && console.log('PRODUCTS', products)
//   const directory = {}

//   // for each product, grab its name check if it already exists in the directory
//   // if it does, write an error to the console
//   // if it doesn't, add it to the directory
//   products && products.forEach((product, i) => {
//     const name = product.name

//     directory[name]
//       ? console.log('ERROR: Duplicate entry found; saveState not checking properly.')
//       : directory[name] = true
//   })
// }

/* ~~~~~~~~~~ CLEAR LOCAL STORAGE FOR NEW QUERY ~~~~~~~~~~ */
/*const clearStorage = () => {
  localStorage.clear()

  // double check to make sure localStorage is empty
  const _items = JSON.stringify(localStorage.getItem('reduxState'))
  _items === {} || _items === null
    ? console.log('Current localStorage contents: ', _items)
    : console.log('localStorage reset; ready for new query')
}*/

export { getState, saveState }

import store from './app/redux/store'

// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('state')

//     if (serializedState === null) return undefined
//     return JSON.parse(serializedState)
//   } catch (err) { return undefined }
// }
const localStorage = window.localStorage

const getState = () => {
  localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}
}

// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('state', serializedState)
//   } catch (err) { /* ignore write errors */ }
// }

const saveState = () => {
  const reduxState = store.getState()

  reduxState && console.log('REDUX STATE', reduxState)

  reduxState && localStorage.setItem('reduxState', JSON.stringify(reduxState))

  const saved = localStorage.getItem('reduxState', JSON.stringify(reduxState))
  saved && console.log('SAVED', saved)
}

export { getState, saveState }

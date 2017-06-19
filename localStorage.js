import store from './app/redux/store'

const localStorage = window.localStorage

const getState = () => {
  const persistedState = localStorage.getItem('reduxState')
  persistedState && JSON.stringify(persistedState)

  // check to make sure its there
  persistedState && console.log('persistedState is loaded from localStorage', persistedState)
}

const saveState = () => {
  const reduxState = store.getState()
  reduxState && localStorage.setItem('reduxState', JSON.stringify(reduxState))

  // check to make sure it's saved
  const persistedState = localStorage.getItem('reduxState')
  persistedState && console.log('reduxState is saved in localStorage', persistedState)
}

export { getState, saveState }

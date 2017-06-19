import store from './app/redux/store'

const localStorage = window.localStorage

const getState = () => {
  const persistedState = localStorage.getItem('reduxState')
  persistedState && JSON.stringify(persistedState)
}

const saveState = () => {
  const reduxState = store.getState()
  reduxState && localStorage.setItem('reduxState', JSON.stringify(reduxState))
}

export { getState, saveState }

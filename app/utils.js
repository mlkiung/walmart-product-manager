import key from '../api.config'
import fetchJsonp from 'fetch-jsonp'
import store from './redux/store'
import { receiveProducts } from './redux/search'

const makeQueryString = (input) => {
  // CONSTANTS ('input' is an array of search parameters)
  const queryStarter = `http://api.walmartlabs.com/v1/search?`
  const apiKey = `&apiKey=${key}`
  const json = `&format=json`
  const responseGroup = `&responseGroup=full`
  const query = input.query
    ? `&query=${input.query}`
    : null
  const sortOption = input.sortOption
    ? `&sort=${input.sortOption}`
    : null
  const results = input.results
    ? `&numItems=${input.results}`
    : `&numItems=${25}`
  const startAt = input.startAt
    ? `&start=${input.startAt}`
    : null
  const brandName = input.brandName
    ? `&facet=on&facet.filter=brand:${input.brandName}`
    : null

  const buildOptions = [queryStarter, query, json, brandName, sortOption, responseGroup, results, startAt, apiKey]

  const buildArr = []

  // BUILDING THE STRING
  buildOptions.forEach((buildOption) => {
    buildOption && buildArr.push(buildOption)
  })

  return buildArr.join('')
}

const getProductsFromApi = function(queryObj) {
  const queryString = makeQueryString(queryObj)

  // uses fetchJsonp library to get products from Walmart API
  fetchJsonp(queryString)
    .then((response) => response.json())
    .then((json) => {
      console.log('parsed json', json)
      store.dispatch(receiveProducts(json))
      // store.subscribe(() => {
      //   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
      // })
    })
    .catch((ex) => console.log('parsing failed', ex))
}

export { getProductsFromApi }

/*

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(reducer, persistedState,
 any middleware...)

)

*/

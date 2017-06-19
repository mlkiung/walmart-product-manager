import key from '../api.config'
import fetchJsonp from 'fetch-jsonp'
import store from './redux/store'
import { receiveProducts } from './redux/search'

const makeQueryString = (input) => {
  const queryStarter = `http://api.walmartlabs.com/v1/search?`
  const apiKey = `&apiKey=${key}`
  const json = `&format=json`
  const query = input.query ? `&query=${input.query}` : null
  const sortOption = input.sortOption ? `&sort=${input.sortOption}` : null
  const responseGroup = `&responseGroup=full`
  const results = input.results ? `&numItems=${input.results}`: null
  const startAt = input.startAt ? `&start=${input.startAt}` : null
  const brandName = input.brandName ? `&facet=on&facet.filter=brand:${input.brandName}` : null

  const buildOptions = [queryStarter, query, json, brandName, sortOption, responseGroup, results, startAt, apiKey]

  const buildArr = []

  buildOptions.forEach((buildOption) => {
    buildOption && buildArr.push(buildOption)
  })

  return buildArr.join('')
}

const getProductsFromApi = function(queryObj) {
  const queryString = makeQueryString(queryObj)

  fetchJsonp(queryString)
    .then((response) => response.json())
    .then((json) => {
      console.log('parsed json', json)
      store.dispatch(receiveProducts(json))
    })
    .catch((ex) => console.log('parsing failed', ex))
}

export { getProductsFromApi }

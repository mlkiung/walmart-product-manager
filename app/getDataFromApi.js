import key from '../api.config'
import fetchJsonp from 'fetch-jsonp'
import store from './redux/store'
import { receiveProducts } from './redux/search'

const makeQueryString = (input, startingNumber) => {
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

const formatNewData = (data) => {
  const query = {
    numItems: data.numItems,
    query: data.query,
    responseGroup: data.responseGroup,
    sort: data.sort,
    start: data.start,
    totalResults: data.totalResults
  }

  const itemsArr = data.items
  const mappedItems = {}
  itemsArr.forEach((item) => {
    const key = item.itemId
    const value = {
      name: item.name,
      brandName: item.brandName,
      customerRating: item.customerRating,
      customerRatingImage: item.customerRatingImage,
      itemId: item.itemId,
      categoryPath: item.categoryPath,
      numReviews: item.numReviews,
      productUrl: item.productUrl,
      salePrice: item.salePrice,
      thumbnailImage: item.thumbnailImage
    }
    mappedItems[key] = value
  })
  console.log('MAP OF ITEMS', mappedItems)
  return [query, mappedItems]
}

const getDataFromApi = function(queryObj) {
  const queryString = makeQueryString(queryObj)

  return new Promise((resolve, reject) => {
    fetchJsonp(queryString)
      .then((response) => response.json())
      .then((json) => {
        console.log('parsed json', json)
        const formattedData = formatNewData(json)
        resolve(formattedData)
      })
      // .catch((ex) => console.log('parsing failed', ex))
      .catch((ex) => new Error('parsing failed', ex))
  })
}

// const getDataFromApi = function(queryObj) {
//   const queryString = makeQueryString(queryObj)
//   console.log('queryString', queryString)

//   // uses fetchJsonp library to get products from Walmart API
//   fetchJsonp(queryString)
//     .then((response) => response.json())
//     .then((json) => {
//       console.log('parsed json', json)
//       const formattedData = formatNewData(json)
//       return formattedData
//     })
//     // .catch((ex) => console.log('parsing failed', ex))
//     .catch((ex) => new Error('parsing failed', ex))
// }

export { getDataFromApi }

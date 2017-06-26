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
    : `&sort=relevance`
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
  // takes data from api and formats it into an object containing data about the last query, an object with key: product Id and value: info about each product (for lookup), and an array of all product objects (for mapping and sorting)
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
  const mappedItemsArr = []
  itemsArr.forEach((item) => {
    const key = item.itemId
    const value = {
      name: item.name,
      brandName: item.brandName,
      newBrandName: '',
      customerRating: Number(item.customerRating),
      customerRatingImage: item.customerRatingImage,
      itemId: item.itemId,
      categoryPath: item.categoryPath,
      numReviews: item.numReviews,
      productUrl: item.productUrl,
      salePrice: item.salePrice,
      thumbnailImage: item.thumbnailImage
    }
    mappedItems[key] = value
    mappedItemsArr.push(value)
  })
  return [query, mappedItems, mappedItemsArr]
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
      .catch((ex) => new Error('parsing failed', ex))
  })
}

export { getDataFromApi }

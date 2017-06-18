import { apiKey, pubId } from '../api.config'

const makeQueryString = (input) => {
  const queryStarter = `http://api.walmartlabs.com/v1/search?apiKey={apiKey}&lsPublisherId={Your LinkShare Publisher Id}`
  const query = input.query ? `$query=${input.query}` : null
  const sortOption = input.sortOption ? `&sort=${input.sortOption}` : null
  const responseGroup = `&responseGroup=full`
  const results = input.results ? `&numItems=${input.results}`: null
  const startAt = input.startAt ? `&start=${input.startAt}` : null
  const brandName = input.brandName ? `&facet=on&facet.filter=brand:${input.brandName}` : null

  const buildOptions = [queryStarter, query, sortOption, responseGroup, results, startAt, brandName]

  const buildArr = []

  buildOptions.forEach((buildOption) => {
    buildOption && buildArr.push(buildOption)
  })

  console.log('querystring', buildArr.join(''))
  return buildArr.join('')
}

export default { makeQueryString }

/*

Search for Ipod within electronics, sort by bestsellers and return full
response:

http://api.walmartlabs.com/v1/search?apiKey={apiKey}&lsPublisherId={Your LinkShare Publisher Id}&query=ipod&categoryId=3944&sort=bestseller&responseGroup=full

We support JSONP response in Search and Product Lookup API. All you need to do is add callback=<your callback name> in addition to specifying format=json in the query params of the API request url. E.g. in Item lookup API, following url will give you JSONP response with callback name foo:

http://api.walmartlabs.com/v1/items/12417832?apiKey={apiKey}&lsPublisherId={Your LinkShare Publisher Id}&format=json&callback=foo

http://api.walmartlabs.com/v1/search?apiKey={apiKey}&lsPublisherId={Your LinkShare Publisher Id}&format=json&callback=CALLBACKNAME&query=ipod&categoryId=3944&sort=bestseller&responseGroup=full

jsonp(url, opts, fn)
  url (String) - url to fetch
  opts (Object) - optional
    param (String) - name of the query string parameter to specify the callback (defaults to callback)
    timeout (Number) - how long after a timeout error is emitted. 0 to disable (defaults to 60000)
    prefix (String) - prefix for the global callback functions that handle jsonp  responses (defaults to __jp)
    name (String) - name of the global callback functions that handle jsonp responses (defaults to prefix + incremented counter)
  fn - callback

The callback is called with err, data parameters.

If it times out, the err will be an Error object whose message is Timeout.

Returns a function that, when called, will cancel the in-progress jsonp request (fn won't be called).

jsonp(url, null, cb)

const cb = (err, data) => {
  if (err) reject(err)
  else resolve(data)
}

const getProducts = () => axios.get('')

const order = `&order=`
const categoryId = `&categoryId=`
const numItems = `&numItems=` // === results
const facet = `&facet=`
const range = `.range` // === startAt
const filter = `.filter`
// Response group is always full
const responseGroup = `&responseGroup=full`

*/

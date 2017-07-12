const express = require('express')
const { resolve } = require('path')

const pkg = require('../index.js')

const app = express()

module.exports = app
  .use(express.static(resolve(__dirname, '..', 'public')))
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))
  .use('/api', require('./api'))

const server = app.listen(process.env.PORT || 1337, () => {
  console.log(`--- Started HTTP Server for ${pkg.name} ---`)
  const { address, port } = server.address()
  const host = address === '::'
    ? 'localhost'
    : address
  const urlSafeHost = host.includes(':')
    ? `[${host}]`
    : host
  console.log(`Listening on http://${urlSafeHost}:${port}`)
})

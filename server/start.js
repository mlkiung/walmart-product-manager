const express = require('express')
const { resolve } = require('path')

// const pkg = require('../index.js')

const app = express()

app.use(require('volleyball'))

module.exports = app
  .use(express.static(resolve(__dirname, '..', 'build')))
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'build', 'index.html')))
  .listen(process.env.PORT || 8080)

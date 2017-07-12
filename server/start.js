const express = require('express')
const { resolve } = require('path')

const pkg = require('../index.js')

const app = express()

module.exports = app
  .use(express.static(resolve(__dirname, '..', 'public')))
  .listen(process.env.PORT || 8080)

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
// const TransformObjectRestSpread = require('transform-object-rest-spread')
const CSSHotLoader = require('css-hot-loader')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/public/index.html'),
  filename: 'index.html',
  inject: 'body'
})

const extractCSS = new ExtractTextPlugin({filename: 'style.css'})

const config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }))
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
    // loaders: [
    //   { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    //   { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    // { test: /\.css$/, loader: extractCSS.extract({ fallback: 'style-loader', use: 'css-loader' }) }
    // ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    // new HtmlWebpackIncludeAssetsPlugin({ assets: ['/style.css'], append: false})
    extractCSS
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = config


/*module: {
  rules: [
    {
      test: /\.css$/,
      use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      }))
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
  ]
}
*/

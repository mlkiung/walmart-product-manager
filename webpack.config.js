const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/public/index.html'),
  filename: 'index.html',
  inject: 'body'
})

// const extractCSS = new ExtractTextPlugin({filename: 'style.css'})

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
        // use: ExtractTextPlugin.extract({
        // fallback: 'style-loader',
        use: ['style-loader', 'css-loader']
        // })
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
  },
  plugins: [
    HTMLWebpackPluginConfig,
    // extractCSS
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
}

module.exports = config

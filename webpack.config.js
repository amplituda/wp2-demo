var webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  stats: {
        // Configure the console output
        errorDetails: true, //this does show errors
        colors: false,
        modules: true,
        reasons: true
    },
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
  },
  module: {
    rules: [
   
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      },
      //   { test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file-loader'}
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}
const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body'
})
const VendorChunkPluginConfig = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'dest/vendor.js',
  minChunks: function (module) {
    return module.context && module.context.indexOf('node_modules') !== -1
  }
})
const config = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'dest/bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ],
    noParse: /(mapbox-gl)\.js$/
  },
  performance: {
    maxAssetSize: 200000,
    maxEntrypointSize: 400000
  },
  plugins: [HTMLWebpackPluginConfig, VendorChunkPluginConfig],
  devServer: {
    watchOptions: {
      poll: true
    },
    compress: true,
    port: 9000
  }
}
module.exports = config

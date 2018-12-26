require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  filename: 'index.html',
  inject: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  },
  path: __dirname,
  template: path.join(__dirname, '/src/index.html')
});

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    chunkFilename: 'vendor.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react', '@babel/env']
        },
        test: /\.(js|jsx)$/
      }
    ],
    noParse: /(mapbox-gl)\.js$/
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    },
    runtimeChunk: 'single'
  },
  performance: false,
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    compress: true,
    port: 9000
  }
};

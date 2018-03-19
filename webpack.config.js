const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
}

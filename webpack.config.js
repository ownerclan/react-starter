const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './index.tsx',
  output: {
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['./', 'node_modules'],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
    ],
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};

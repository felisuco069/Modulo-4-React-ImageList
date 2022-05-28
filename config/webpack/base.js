const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');

module.exports = {
  context: helpers.resolveFromRootPath('src'),
  resolve: {
    alias: {
      assets: helpers.resolveFromRootPath("src/assets"),
      core: helpers.resolveFromRootPath("src/core"),
      commonApp: helpers.resolveFromRootPath("src/commonApp"),
      layaut: helpers.resolveFromRootPath("src/layaut"),
      router: helpers.resolveFromRootPath("src/router"),
      scenes: helpers.resolveFromRootPath("src/scenes"),
      pods: helpers.resolveFromRootPath("src/pods"),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  entry: {
    app: ['regenerator-runtime/runtime', './index.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
  ],
}

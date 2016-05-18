const path = require("path");
const isServer = typeof(__SERVER__) !== 'undefined' && __SERVER__;

module.exports = {
  plugins: [
  ],
  server: {
    disabled: true,
    favicon: path.resolve(__dirname, '../static/favicon.png')
  },
  webpack: {
    config: {
      devtool: 'source-map',
      module: {
        preLoaders: [{ 
          test:   /\.js$/,
          include: [
          ],
          loader: 'source-map-loader'
        }]
      },
      resolve: {
        extensions: ['.scss'],
        alias: {}
      }
    }
  }
};
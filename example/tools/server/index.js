/**
 * server.js
 *
 * Webpack server config that you can change it as you like
 * Reference: https://webpack.js.org/configuration/dev-server/
 *
 */

module.exports = {
  port: 3000,
  compress: true,
  quiet: false,
  clientLogLevel: 'none',
  disableHostCheck: true,
  historyApiFallback: {
    disableDotRule: true,
  },
  proxy: {
    
  }
};

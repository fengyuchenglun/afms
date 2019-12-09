/**
 * base.js
 *
 * Webpack base config that will be merged with dev.js and prod.js
 * Reference: https://webpack.js.org/configuration/
 *
 */

const path = require('path');

const resolveApp = relativePath => path.join(process.cwd(), relativePath);

module.exports = {
  entry: resolveApp('src/index.tsx'),
  module: {
    rules: [],
  },
  resolve: {
  },
  plugins: [],
};

// 'use strict'

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

const babelJest = require('babel-jest');

module.exports = {
  // process () {
  //   return 'module.exports = {};'
  process(src, filename, config, options) {
    return babelJest.process(src, filename, config, options);
  },
  // getCacheKey () {
  //   // The output is always the same.
  //   return 'cssTransform'
  // },
  'type': 'module',
  extensionsToTreatAsEsm: ['.js', '.jsx']
};

const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
});

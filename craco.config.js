const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Reducers': path.resolve(__dirname, 'src/reducers/'),
      '@Lang': path.resolve(__dirname, 'src/lang/'),
    },
  },
};

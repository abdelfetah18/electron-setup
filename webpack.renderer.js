const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'css-loader', 'postcss-loader',
        /*{
          loader: path.resolve('./customLoader.js'),
          options: {
          },
        },*/
        ]
      }
    ]
  }
}
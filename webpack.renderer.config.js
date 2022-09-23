const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
        include: path.resolve(__dirname, 'src/renderer/entry/index.css')
      },
    ]
  }
}
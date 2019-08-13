const path = require('path');

module.exports = {
  entry: {
    app: [
      '@babel/polyfill',
      './src/app.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-stage-0']
          }
        }
      }
    ]
  }
}

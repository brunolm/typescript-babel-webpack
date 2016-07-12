module.exports = {
  entry: ['babel-polyfill', './src/'],
  output: {
    path: __dirname,
    filename: './dist/index.js',
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
  },
  module: {
    loaders: [{
      test: /\.ts$/, loaders: ['babel-loader', 'ts-loader'], exclude: /node_modules/
    }],
  }
};

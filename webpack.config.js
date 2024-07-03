const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Don't apply to node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript
        },
      },
    ],
  },
};

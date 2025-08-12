const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'node',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  externals: {
    // Don't bundle node_modules, but do include them in the final bundle
  },
  optimization: {
    minimize: false, // Keep readable for debugging
  },
  node: {
    __dirname: false,
    __filename: false,
  },
};

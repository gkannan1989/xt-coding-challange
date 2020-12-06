const path = require('path');

module.exports = {
  target: 'node',
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public',
  },
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'build/media/[name].[ext]',
          publicPath: url => url.replace(/build/, ''),
        },
      },
      {
        test: [/\.js$/, /\.jsx$/],
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: ['@babel/preset-react', '@babel/env'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-react-jsx',
          ],
        },
      },
      {
        test: /\.css$/i,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
};

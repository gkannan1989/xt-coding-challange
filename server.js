const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './server/serve.js',
  output: {
    filename: 'package.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
  },
  devServer: {
    inline: false,
    contentBase: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'build/media/[name].[ext]',
          publicPath: url => url.replace(/build/, ''),
          emit: false,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  esmodules: true,
                },
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            ['@babel/plugin-proposal-class-properties'],
            ["@babel/plugin-transform-react-jsx"],
            ['@babel/transform-regenerator'],
            [
              '@babel/transform-runtime',
              {
                regenerator: true,
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  externals: [webpackNodeExternals()],
};

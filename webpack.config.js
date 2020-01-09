const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    stats: 'minimal',
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 8000,
    contentBase: './build',
  },
  entry: {
    main: ['./src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};

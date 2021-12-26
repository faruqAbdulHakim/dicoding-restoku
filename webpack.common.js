/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { default: ImageminWebpackPlugin } = require('imagemin-webpack-plugin');
const imageminMozJpeg = require('imagemin-mozjpeg');
const imageminPngQuant = require('imagemin-pngquant');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 80000,
      minChunks: 1,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
    new ImageminWebpackPlugin({
      plugins: [
        imageminMozJpeg({
          quality: 50,
          progressive: true,
        }),
        imageminPngQuant({
          quality: [0.3, 0.5],
        }),
      ],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
};

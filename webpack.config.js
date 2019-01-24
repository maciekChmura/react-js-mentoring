const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const modeOption = env.dev || !env.prod;

  return {
    mode: modeOption ? 'development' : 'production',
    entry: './src/index.jsx',
    devtool: modeOption ? 'source-map' : 'none',
    devServer: {
      contentBase: './dist',
      hot: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
            publicPath: 'images'
          }
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'React Mentoring',
        template: 'template.html',
        filename: './index.html'
      })
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    }
  };
};

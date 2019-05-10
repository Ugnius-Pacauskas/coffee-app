const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader"
          }
      },
      {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
          test: /\.html$/,
          use: [{
              loader: "html-loader"
          }]
      },
      {
        test: /\.(png|jpe?g)/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./img/[name].[ext]",
            }
          },
          {
            loader: "img-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};
const path = require('path');

module.exports = {
   module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'css-loader',
              options: { 
                sourceMap: true,
                importLoaders: 1 
              }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true }
            }
          ]
        },
        {
          test: /\.(jpg|png|svg)$/,
          use: {
            loader: 'url-loader',
            options: { limit: 5000 },
          },
        },
        {
         test: /\.vue$/,
         loader: 'vue-loader'
       }
      ]
   },
   resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
}
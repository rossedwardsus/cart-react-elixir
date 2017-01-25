var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './web/static/js/redux1/app.js',
  
  output: { path: __dirname, filename: './web/static/js/redux1/bundle.js' },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        },
        //plugins: ['transform-object-rest-spread']
      }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: './web/static/js/',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    modules: [
      path.join(__dirname, './web')
    ],
    root: [
      path.resolve('./web'),
      //path.resolve('./vendor/modules')
    ],
    alias: {
      //reducers: './reducers',
    },
    extensions: ['', '.js', '.jsx']
  },
};
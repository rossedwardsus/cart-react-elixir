var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './web/static/js/flow/flow_test.js',
  
  //output: { path: __dirname, filename: './web/static/js/flow/bundle_flow.js' },
  output: { path: __dirname, filename: './priv/static/js/flow/bundle_flow.js' },
  
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        },
        //plugins: ['transform-object-rest-spread']
      },{
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        },
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ],
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
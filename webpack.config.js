var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './main.js',
  
  //entry: {
    //demo: './demo.js' //entry point for building scripts
  //},

  output: { path: __dirname, filename: 'admin_orders.js' },
  //output: { path: __dirname, filename: 'admin_order.js' },
  //output: { path: __dirname, filename: 'admin_item_add.js' },
  

  output: { path: __dirname, filename: 'gallery.js' },
  //output: { path: __dirname, filename: 'create_order.js' },
  
  //output: { path: __dirname, filename: 'user_profile_name.js' },
  //output: { path: __dirname, filename: 'user_profile_image.js' },
  //output: { path: __dirname, filename: 'user_profile_payment.js' },
  //output: { path: __dirname, filename: 'user_profile_password.js' },
  //output: { path: __dirname, filename: 'user_orders.js' },
  //output: { path: __dirname, filename: 'user_order.js' },

  //output: { path: __dirname, filename: 'choose_items.js' },
  //output: { path: __dirname, filename: 'chosen_item.js' },
  //output: { path: __dirname, filename: 'order_items.js' },
  //output: { path: __dirname, filename: 'choose_members.js' },
  //output: { path: __dirname, filename: 'message.js' },
  //output: { path: __dirname, filename: 'stationary.js' },
  //output: { path: __dirname, filename: 'subtotal.js' },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ],
  },
};
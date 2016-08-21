var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './main.js',
  
  //entry: {
    //demo: './demo.js' //entry point for building scripts
  //},

  //output: { path: __dirname, filename: 'admin_orders.js' },
  //output: { path: __dirname, filename: 'admin_order.js' },
  //output: { path: __dirname, filename: '/priv/static/js/admin_add_item.js' },
  
  //output: { path: __dirname, filename: '/priv/static/js/order.js' },
  
  output: { path: __dirname, filename: '/priv/static/js/user_profile_photo.js' },
  //output: { path: __dirname, filename: '/priv/static/js/user_profile_delivery_address.js' },
  //output: { path: __dirname, filename: '/priv/static/js/user_profile_payment.js' },
  //output: { path: __dirname, filename: '/priv/static/js/user_profile_name.js' },
  //output: { path: __dirname, filename: '/priv/static/js/user_profile_food_preferences.js' },
  //output: { path: __dirname, filename: '/priv/static/js/user_order.js' },

  //output: { path: __dirname, filename: '/priv/static/js/user_order_guest_choose_item.js' },

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
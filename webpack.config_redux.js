var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './priv/static/js/redux/redux_app.js',
  
  //entry: {
    //demo: './demo.js' //entry point for building scripts
  //},

  //output: { path: __dirname, filename: 'admin_orders.js' },
  //output: { path: __dirname, filename: 'admin_order.js' },
  //output: { path: __dirname, filename: '/priv/static/js/admin_add_item.js' },
  
  output: { path: __dirname, filename: './priv/static/js/redux/output/app.js' },
  
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
        include: __dirname,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        },
        plugins: ['transform-object-rest-spread']
      }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: './priv/static/js/',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    modules: [
      path.join(__dirname, './priv')
    ],
    root: [
      path.resolve('./priv'),
      //path.resolve('./vendor/modules')
    ],
    alias: {
      reducers: './reducers',
    
    },
    extensions: ['', '.js', '.jsx']
  },
};
var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  devtool: "source-map",
  entry: './web/static/js/flow/flow_test.js',
  //entry: {
  //  app: './web/static/js/flow/flow_test.js',
    //vendors: [
    //  'react', 'react-dom',
    //  'react-router', 'react-bootstrap', 'react-bootstrap-datetimepicker', 'moment',
    //],
  //},
  
  //output: { path: __dirname, filename: './web/static/js/flow/bundle_flow.js' },
  output: { path: __dirname, filename: './priv/static/js/flow/bundle_flow.js' },
  //output: {
  //      path: __dirname + '/priv/static/js',
  //      filename: "[name].bundle.js"
        //filename: './priv/static/js/flow/[name].js'

        /*path: path.join(__dirname, 'public/dist'),
        publicPath: '/dist/',
        filename: 'bundles/[name].bundle.js',
        chunkFilename: 'chunks/[name].chunk.js',*/
    
  //},
  
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
      },{ 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }//,{
    // use `test` to split a single file
    // or `include` to split a whole folder
    //  test: /.*/,
      //  include: [path.resolve(__dirname, './web/static/js/flow/public')],
      //  loaders: ['bundle?lazy&name=public', 'babel-loader']
      //}
    ],
  },
  //plugins: [
  //  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  //  new webpack.optimize.UglifyJsPlugin({ mangle: false, compress: { warnings: false }}),
  //  new webpack.NoErrorsPlugin(),
  //  new webpack.DefinePlugin({ 'process.env.NODE_ENV': `"${config.env}"` })
  //],
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
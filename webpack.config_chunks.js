var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  devtool: "source-map",
  entry: {
    app: './web/static/js/flow/flow_test.js',
    vendor: [
      'react', 'react-dom', 'react-router', 'react-datepicker', 'moment', 'bootstrap', 'immutable', 'lodash'
    ],
  },
  
  //output: { path: __dirname, filename: './web/static/js/flow/bundle_flow.js' },
  //output: { path: __dirname, filename: './priv/static/js/flow/bundle_flow.js' },
  output: {
        path: __dirname + '/priv/static/js/',
        //filename: "bundle.js"
        //filename: './priv/static/js/flow/[name].js'

        //path: path.join(__dirname, 'public/dist'),
        //publicPath: '/dist/',
        filename: '[name].js',
        //chunkFilename: 'chunks/[name].chunk.js',
    
  },
  
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins: ["transform-decorators-legacy"]
        },
        //plugins: ['transform-object-rest-spread']
      },{
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins: ["transform-decorators-legacy"]
        },
      },{ 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },{
    // use `test` to split a single file
    // or `include` to split a whole folder
    //  test: /.*/,
        include: [path.resolve(__dirname, '/public'), ],
        loaders: ['bundle?lazy&name=public', 'babel-loader']
      },{
    // use `test` to split a single file
    // or `include` to split a whole folder
    //  test: /.*/,
        include: [path.resolve(__dirname, '/sconely_signature_guest'), ],
        loaders: ['bundle?lazy&name=sconely_signature_guest', 'babel-loader']
      },
      { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' }
    ],
  },
  plugins: [
    //new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    //new webpack.optimize.UglifyJsPlugin({ mangle: false, compress: { warnings: false }}),
    new webpack.NoErrorsPlugin(),
  //  new webpack.DefinePlugin({ 'process.env.NODE_ENV': `"${config.env}"` })
    //new webpack.optimize.AggressiveMergingPlugin(),
    /*new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })*/

    
  ],
  resolve: {
    modules: {
      //path.join(__dirname, './web')
      modulesDirectories: [ 'node_modules' ],
      extensions: [ '', '.js', '.jsx' ]
    },
    root: [
      path.resolve('./web'),  //maybe use /web/static/js/flow
      //path.resolve('./vendor/modules')
    ],
    alias: {
      //reducers: './reducers',
    },
    extensions: ['', '.js', '.jsx']
  },
};
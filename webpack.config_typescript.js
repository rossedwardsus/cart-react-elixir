var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");


module.exports = {
    entry: "./web/static/js/typescript/SconelyYours.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/priv/static/js/typescript"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    //plugins: [
      //new UglifyJsPlugin()
    //],

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { 
              test: /\.tsx?$/, 
              loaders: [
                "ts-loader", 
                //"babel-loader"
                //"babel?presets[]=es2015"
              ] 
            }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader", loader: 'tslint-loader' }
        ]
    },

    tslint: {
        configuration: {
            rules: {
                quotemark: [true, 'double']
            }
        },
        
        /*// enables type checked rules like 'for-in-array' 
        // uses tsconfig.json from current working directory 
        typeCheck: false,
        
        // can specify a custom config file relative to current directory 
        // 'tslint-custom.json' 
        configFile: false,
 
        // tslint errors are displayed by default as warnings 
        // set emitErrors to true to display them as errors 
        emitErrors: false,
 
        // tslint does not interrupt the compilation by default 
        // if you want any file with tslint errors to fail 
        // set failOnHint to true 
        failOnHint: true,        
 
        // name of your formatter (optional) 
        formatter: 'yourformatter',
 
        // path to directory containing formatter (optional) 
        formattersDirectory: 'node_modules/tslint-loader/formatters/',
        
        // These options are useful if you want to save output to files 
        // for your continuous integration server 
        fileOutput: {
            // The directory where each file's report is saved 
            dir: './foo/',
 
            // The extension to use for each report's filename. Defaults to 'txt' 
            ext: 'xml',
 
            // If true, all files are removed from the report directory at the beginning of run 
            clean: true,
 
            // A string to include at the top of every report file. 
            // Useful for some report formats. 
            header: '<?xml version="1.0" encoding="utf-8"?>\n<checkstyle version="5.7">',
 
            // A string to include at the bottom of every report file. 
            // Useful for some report formats. 
            footer: '</checkstyle>'
        }*/
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: './index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    debug: true,
    devtool: "#eval-source-map",
    module : {
        loaders : [
            {
                test : /\.js?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                 presets: ['es2015', 'react']
               }
            },
            { 
              test: /\.css$/,
              loader: 'style-loader!css-loader!' 
            }
        ]
    }
};

module.exports = config;

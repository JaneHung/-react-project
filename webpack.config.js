var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
        // 'webpack-dev-server/client?http://127.0.0.1:8082',
        //'webpack/hot/dev-server',
         path.resolve(__dirname, './app/app.js')
         ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }

            }
        ]
    },
  /*  devServer: {
        contentBase: './build/',
        noInfo: true,
        hot: true,
        inline: true
    },*/
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

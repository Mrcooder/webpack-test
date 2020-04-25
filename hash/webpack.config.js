var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    context : path.join(__dirname,'./'),
    entry:{
        main: './index.js',
    },
    module:{
        rules:[{
            test:/\.css$/,
            // use: ['style-loader', 'css-loader'],
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader'
            ]
        }]
    },
    output:{
        path:path.join(__dirname, '/dist/js'),
        filename: 'bundle.[name].js',
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },

    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ]
};

config.devtool = 'source-map';

module.exports = config;

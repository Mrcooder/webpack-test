var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
    context: path.join(__dirname, './'),
    entry: {
        main: './index.jsx',
        vendor: ['react', 'react-dom']
    },
    module: {
        rules: [{
            test: /\.css$/,
            // use: ['style-loader', 'css-loader'],
            use: [
                'css-loader'
            ]
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }]
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        writeToDisk: true,
    },

    plugins: [
        new HtmlWebpackPlugin(),
    ],

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};

config.devtool = 'source-map';

module.exports = (env, argv) => {
    return ({
        ...config,
        optimization: argv.mode === 'production' ? {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    include: /\/includes/,
                }),
            ],
        } : undefined,
    });
};

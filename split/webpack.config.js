var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
    context: path.join(__dirname, './'),
    entry: {
        main: './index.jsx',
    },
    mode: 'production',

    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'css-loader'
            ]
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                modules: false,
                            }]
                        ]
                    }
                }
            ]
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

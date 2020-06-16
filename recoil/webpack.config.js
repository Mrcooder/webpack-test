const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const ctxPath = process.env.INIT_CWD || __dirname;
const config = {
    context: path.join(ctxPath, './'),
    entry: {
        main: './index.jsx',
    },

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

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    output: {
        path: path.join(ctxPath, './dist'),
        filename: '[name].js',
    },

    devServer: {
        contentBase: ctxPath,
        compress: true,
        port: 8080,
        hot: true,
        writeToDisk: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './template.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};

config.devtool = 'source-map';
console.log('fuck', config.context);

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

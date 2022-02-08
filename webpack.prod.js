
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin           = require("copy-webpack-plugin");

const cssMinimizer = require('css-minimizer-webpack-plugin');
const Terser       = require('terser-webpack-plugin');
const path         = require('path');


module.exports = {
    mode: 'production',

    entry: './frontend/src/app.js',
    output: {
        clean: true,
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /style.css$/,
                use: [ 'style-loader' , 'css-loader' ]
            },
            {
                test: /style.css$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader" ]
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new cssMinimizer(),
            new Terser(),
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'template/main.html',
            template: './frontend/src/index.html',
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name].[fullhash].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                {
                    from: "frontend/src/assets/img", to: "assets/img",
                },
            ],
        }),
    ],

};
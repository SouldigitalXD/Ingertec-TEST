const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin    = require("copy-webpack-plugin");
const path                 = require('path');

module.exports = {
    mode: 'development',

    entry: './frontend/src/app.js',
    output: {
        path: path.resolve(__dirname, 'backend/public'),
        filename: 'js/[name].js',
        clean: true
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
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpackPlugin({
            // filename: 'template/index.html',
            template: './frontend/src/index.html',
        }),
        
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            ignoreOrder: false
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "frontend/src/assets/img", to: "assets/img",
                },

            ],
        }),
    ],

};
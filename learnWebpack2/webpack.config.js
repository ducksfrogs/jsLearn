const path = require('path');
const HtmpwebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        another: './src.another-module.js',
    },
    plugins: [
        new HtmpwebpackPlugin({
            title: 'output management',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css%/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(png|svg|jpeg|jpg|gif)%/i,
                type: 'asset/resource',
            },
        ],
    },
};
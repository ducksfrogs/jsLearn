const path = reqire('path');

module.exports = {
    entry: {
        app: './src/index.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname +  '/dist'
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'my-first-webpack.bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    { loader: 'sass-loader'},
                ],
            },
        ],
    },
};
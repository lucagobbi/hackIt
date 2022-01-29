const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/assets/js/index.js', 
        feed: './src/assets/js/feed.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name].png'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Hacker News',
        template: './src/index.html',
        chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'feed.html',
            template: './src/feed.html',
            chunks: ['feed']
          })
    ]
}
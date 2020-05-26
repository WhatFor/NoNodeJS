var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/ts/app.ts',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        index: 'index.html',
        liveReload: true,
        contentBase: path.join(__dirname, '/'),
        watchContentBase: true,
        compress: true,
        port: 8080
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/, use: [
                    'babel-loader',
                    'ts-loader'
                ]
            },
            {
                test: /\.html$/, use: [
                    'raw-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.html', '.scss']
    },
    plugins: [
        new htmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
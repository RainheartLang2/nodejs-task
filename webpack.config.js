const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin")

const serverConfig = {
    entry: {
        server: './src/server.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /(.js|.jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ],
    },
}

const clientConfig = {
    entry: {
        createPage: './src/createPage/createPage.jsx',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'resources/[name].js'
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        rules: [
            {
                test: /(.js|.jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{loader: "html-loader"}]
            }
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "commonStyles": path.resolve(__dirname, 'app/typescript/core/common.less')
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/resources/index.html",
            filename: "./resources/index.html",
            excludeChunks: [ 'server' ]
        })
    ]
}
module.exports = [serverConfig, clientConfig]
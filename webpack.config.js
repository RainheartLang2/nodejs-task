const path = require('path')
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
                test: /.js$/,
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
        listPage: './src/listPage/listPage.jsx',
    },
    devtool: "inline-source-map",
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
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
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
            filename: "./personalForm.html",
            excludeChunks: ['server', 'listPage']
        }),
        new HtmlWebPackPlugin({
            template: "./src/resources/index.html",
            filename: "./list.html",
            excludeChunks: ['server', 'createPage']
        }),
    ]
}
module.exports = [serverConfig, clientConfig]
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');


module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    devtool: 'inline-source-map',
    stats: {
        children: false,
        modules: false
    },
    devServer: {
        port: 3001,
        hot: 'only',
        open: true,
        historyApiFallback: true,
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    plugins: [ new MiniCssExtractPlugin(),
               new ESLintPlugin(),
               new HtmlWebpackPlugin({template: './src/index.html'}),],

    module: {
        rules: [
            {test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader',
                ],
            },
            {
               test: /\.json$/,
               loader: 'json-loader',
               type: 'javascript/auto' // Для Webpack 5
           }
        ]
    }
};
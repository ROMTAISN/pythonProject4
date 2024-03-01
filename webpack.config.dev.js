const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    stats: {
        children: false,
        modules: false
    },
    devServer: {
        static: './dist',
        port: 3001,
        hot: 'only',
        open: true,
    },

    output: {
        filename: 'main.js'
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
            }
        ]
    }
};
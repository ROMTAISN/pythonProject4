const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist-prod',
        hot: false,
        open: true,
        liveReload: false,
    },

    output: {
        path: path.resolve(__dirname, 'dist-prod'),
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
            }
        ]
    }
};
'use strict';

import { Configuration } from 'webpack';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function() {
    const config: Configuration = {};

    config.context = path.resolve(__dirname, 'src');

    config.resolve = {
        extensions: ['.js', '.ts', '.tsx']
    };

    config.entry = { ppms: './index' };

    config.output = {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    };

    config.plugins = [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            inject: 'body',
            hash: true,
            chunksSortMode: 'dependency',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.CommonsChunkPlugin('shared.js')
    ];
    config.module = {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png)/,
                use: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]'],
                exclude: /node_modules/
            }
        ]
    };

    config.devServer = {
        stats: 'minimal',
        overlay: true,
        disableHostCheck: true,
        headers: {
        'Access-Control-Allow-Origin': '*'
        },
        historyApiFallback: true
    };

    return config;
};

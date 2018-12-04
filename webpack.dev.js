// 开发环境的配置


const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        port:9000,
        host:'127.0.0.1',
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
})
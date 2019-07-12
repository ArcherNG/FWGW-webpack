// 开发环境的配置


const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// 开启热更新   启用 source map
module.exports = merge(common,{
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        port:9000,
        // 本地调试
        // host:'127.0.0.1',
        // 外部访问测试
        host:'192.168.0.105',
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
})
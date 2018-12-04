//生产环境的配置 


// webpack-merge插件是根据环境的不同，在common中配置具体需求
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common,{
      // 丑化css代码
    optimization: {
        minimizer: [
          new UglifyJSPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
    },
})
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MinicssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    // 漏写会报编译时错误  新添加的属性
    mode: 'production',
    // 屏蔽一些因为加载文件过大的一些编译时错误
    // 性能配置
    // 这些选项可以控制 webpack 如何通知「资源(asset)和入口起点超过指定文件限制」。 
    // 此功能受到 webpack 性能评估的启发。
    performance: {
      hints: false
    },
    // 入口和上下文(entry and context)设置
    //entry 对象是用于 webpack 查找启动并构建 bundle。
    //其上下文是入口文件所处的目录的绝对路径的字符串。
    entry: {
       index:'./src/js/index.js',
       bussess:'./src/js/bussess.js'
    },
    // 插件设置  plugins 选项用于以各种方式自定义 webpack 构建过程。
    //webpack 附带了各种内置插件，可以通过 webpack.[plugin-name] 访问这些插件。
    //请查看这个页面获取插件列表和对应文档，但请注意这只是其中一部分，社区中还有许多插件。
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks:['index','common'],
            minify: {
                removeAttributeQuotes:true,
                removeComments: true,
                collapseWhitespace: true,
                removeScriptTypeAttributes:true,
                removeStyleLinkTypeAttributes:true
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'bussess.html',
            template: './src/bussess.html',
            chunks:['bussess','common'],
            minify: {
                removeAttributeQuotes:true,
                removeComments: true,
                collapseWhitespace: true,
                removeScriptTypeAttributes:true,
                removeStyleLinkTypeAttributes:true
            }
        }),
        new MinicssExtractPlugin({
            filename: "css/[name].css",
        })
    ],
    // 输出设置
    //output 位于对象最顶级键(key)，包括了一组选项，指示 webpack 如何去输出、以及在哪里输出你的「bundle、asset 和其他你所打包或使用 webpack 载入的任何内容」。
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    // 模块化设置  这些选项决定了如何处理项目中的不同类型的模块。
    module: {
        // webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。
        //在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader。
        rules: [
            {
                test: /\.css$/,
                //对css进行单独打包
                use: [
                    {
                        loader: MinicssExtractPlugin.loader,
                        options:{
                            // css通过url地址引入的图片设置
                            publicPath: '../',
                            outputPath: 'css'
                        }
                    },
                    "css-loader"
                ]
            },
            //在这种情况下，图片文件，都将被提供给 file-loader。
            {
                test:/\.(png|svg|jpg|gif)$/,
                use: [{
                    // 大于8192字节的图片正常打包，小于8192字节的图片以 base64 的方式引用。
                    loader: 'url-loader',
                    options: {
                        limit: "8192",
                        name:"[name].[ext]",
                        outputPath: "images"
                    }
                }]
            },
             // html中引用的静态资源在这里处理,默认配置参数attrs=img:src,处理图片的src引用的资源.
             {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    // 除了img的src,还可以继续配置处理更多html引入的资源
                    attrs: ['img:src', 'img:data-src', 'audio:src']
                }
            },
        ]
    },
    // 将SplitChunksPlugin允许我们共同的依赖提取到一个现有的条目块或一个全新的块。
    optimization: {
        splitChunks: {
            name: 'common',
            chunks: 'all',
            filename: 'js/common.bundle.js'
        }
    }
}
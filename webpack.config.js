const path = require('path')
// 插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 路径
const ENTRY_PATH = resolve('./src/index.js')
const DIST_DIR = resolve('./dist')

module.exports = (env, argv) => {
  return {
    // 入口
    entry: [
      resolve('src/index.js')
    ],
    // 出口
    output: {
      path: resolve('dist'),
      filename: 'index.js',
    },
    resolve: {
      // 定义模块查找的后缀，方便在代码引用时可省略后缀
      extensions: ['.js', '.vue', '.json'],
      // 定义路径简写
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'src' : resolve('src'),
        '@' : resolve('src'),
      }
    },
    module: {
      // 文件的loader
      rules: [
        {
            test: /\.js$/,
            loader:"babel-loader",
            exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.sass$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                indentedSyntax: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      // 处理css，可以把vue中提取css为单独文件
      new MiniCssExtractPlugin({
        filename: "css/[name].[hash].css"
      }),
      // webpack4下，vue-loader需要这样引入
      new VueLoaderPlugin()
    ],

    devtool: 'source-map'
  }
}

function resolve(dir) {
  return path.join(__dirname, './', dir);
}


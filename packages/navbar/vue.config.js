const isProduction = process.env.NODE_ENV === 'production'
const appName = process.env.VUE_APP_NAME
const port = process.env.port
const baseUrl = process.env.VUE_APP_BASE_URL
const path = require('path')
module.exports = {
  // 防止开发环境下的加载问题
  publicPath: isProduction ? `${baseUrl}${appName}/` : `http://localhost:${port}/`,

  // css在所有环境下，都不单独打包为文件。这样是为了保证最小引入（只引入js）
  css: {
    extract: false
  },

  productionSourceMap: false,

  outputDir: path.resolve(__dirname, `../../dist/${appName}`), // 统一打包到根目录下的dist下

  chainWebpack: config => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', true)
    config.devServer.set('port', port)
    // 保证打包出来的是一个js文件，供主应用进行加载
    config.output.library(appName).libraryTarget('umd')

    config.externals(['vue', 'vue-router', 'vuex']) // 一定要引否则说没有注册

    if (process.env.NODE_ENV === 'production') {
      // 打包目标文件加上 hash 字符串，禁止浏览器缓存
      config.output.filename('js/index.[hash:8].js')
    }
  }
}

const { defineConfig } = require("@vue/cli-service")
const path = require("path")
const resolve = (dir) => path.join(__dirname, dir)
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 根目录
  productionSourceMap: false,
  // 打包输出文件地址 , 未设置时默认 dist
  outputDir: "dist",
  // 放置静态资源
  assetsDir: "assets",
  // 开发环境端口号
  devServer: {
    port: 8080,
    // 运行时是否直接打开浏览器
    open: true,
    // host 配置项
    host: "0.0.0.0",
    // 是否开启https
    https: false,
    proxy: {
      // 静态代理
      // '/api': {
      // 	changeOrigin: true,
      // 	// secure: false,
      // 	target:'https://baidu.com',
      // 	pathRewrite: {
      // 		'^/api': ''
      // 	}
      // }
      // 动态代理标识
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: " "
        }
      }
    }
  },
  // 路径别名
  configureWebpack: {
    resolve: {
      alias: {
        "@com": resolve("src/components"),
        vue$: "vue/dist/vue.esm.js"
      }
    }
  }
})

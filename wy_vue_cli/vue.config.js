const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  //开启代理服务器（方式一），但只能配置一个转发的目的地URL（用于跨域请求，应用于“Ajax章节”）
  /* devServer: {
    proxy: 'http://localhost:后端的端口号'
  } */
  //开启代理服务器（方式二，推荐）
  devServer: {
    proxy: {
      '/dst1': {
        // URL中 /dst1 前缀的请求转发到 http://localhost:6666
        target: 'http://localhost:6666',
        //转发时截取指定的前缀，类似nginx的功能
        pathRewrite: {
          '^/dst1': ''
        },
        //用于支持websocket
        // ws: true,
        //是否暴露原始请求来源，默认为true（不暴露）
        // changeOrigin: true
      },
      '/dst2': {
        // URL中 /dst2 前缀的请求转发到 http://localhost:7777
        target: 'http://localhost:7777',
        //转发时截取指定的前缀，类似nginx的功能
        pathRewrite: {
          '^/dst2': ''
        }
      }
    }
  }
})
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolveLoader: {
      modules: ['node_modules', './loaders']
    }
  },
  chainWebpack: config => {
    // config.module
    //   .rule('vue')
    //   .test(/\.vue$/)
    //   .use('txt-loader')
    //     .loader('txt-loader')
    //     .end()

   
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('my-loader')
      .loader(path.resolve(__dirname, './my-loader.js'))
      // .before('vue-loader')
      .end()
  }
})

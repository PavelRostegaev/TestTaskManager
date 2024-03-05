const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/TestTaskManager/',
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true
  }
})
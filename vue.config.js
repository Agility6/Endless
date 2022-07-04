module.exports = {
  lintOnSave: false,
  configureWebpack: {
    // 配置路径
    resolve: {
      alias: {
        'assets': '@/assets'
      }
    }
  },
}

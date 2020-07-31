module.exports = {
  assetsDir: 'static',
  chainWebpack: config => {
    // 查看打包文件体积大小
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
      .module
      .rule("view-design")  //  我目前用的是新版本的iview ,旧版本的iview，用iview代替view-design
      .test(/view-design.src.*?js$/)
      .use("babel")
      .loader("babel-loader")
      .end();
  }
}
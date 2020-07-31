const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  assetsDir: 'static',
  chainWebpack: config => {
    config.module
    .rule("view-design") 
    .test(/view-design.src.*?js$/)
    .use("babel")
    .loader("babel-loader")
    .end();      
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css)$/,
            threshold: 10240, 
            deleteOriginalAssets: false, 
            minRatio: 0.8
          })
        ]
      }
    }
  }
}
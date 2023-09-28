const path = require('path')

module.exports = {
  outputDir: './build',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://123.207.32.32:8000/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}

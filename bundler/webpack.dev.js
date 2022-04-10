const path = require('path')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const ip = require('internal-ip')
const portFinderSync = require('portfinder-sync')

module.exports = merge(commonConfiguration, {
  stats: 'errors-warnings',
  mode: 'development',
  devServer: {
    host: 'local-ip',
    port: portFinderSync.getPort(8080),
    historyApiFallback: true,
    open: true,
    https: false,
    allowedHosts: 'all',
    hot: false,
    watchFiles: ['../src/app/**', '../src/static/**'],
    static: {
      watch: true,
      directory: path.join(__dirname, '../src/static')
    },
    client: {
      logging: 'none',
      overlay: true,
      progress: false
    },
    setupMiddlewares: (middlewares, devServer) => {
      middlewares.push(() => {
        const port = devServer.options.port
        const https = devServer.options.https ? 's' : ''
        const localIp = ip.v4.sync()
        const domain1 = `http${https}://${localIp}:${port}`
        const domain2 = `http${https}://localhost:${port}`

        console.log(`Project running at: ${domain1}\n - ${domain2}`)
      })

      return middlewares
    }
  }
})

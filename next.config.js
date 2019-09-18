const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  
  // cssModules: true,
  webpack: (config) => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )
 
    return config
  }
})
const path = require('path')
const HTMLWebpakPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './public/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js'
    },
    plugins: [
        new HTMLWebpakPlugin({
            template: './public/index.html'
        })
    ]
}
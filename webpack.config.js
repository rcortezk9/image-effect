const path = require('path')
const HTMLWebpakPlugin = require('html-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')
const { resolve } = require('path')

module.exports = {
    entry: './public/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js'
    },
    plugins: [
        new HTMLWebpakPlugin({
            template: './public/index.html'
        }),
        new WasmPackPlugin({
            createDirectory: path/resolve(__dirname, '.')
        })
    ],
    experiments: {
        asyncWebAssembly: true
    }
}
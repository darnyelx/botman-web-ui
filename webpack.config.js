// const path = require('path');
// const merge = require('webpack-merge');
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
//
// // module.exports = merge(require('./webpack.base'), {
// //     context: __dirname,
// //
// //     entry: './src/index.js',
// //
// //     output: {
// //         path: path.resolve(__dirname, 'dist'),
// //         filename: 'index.js',
// //         library: 'package_name',
// //         libraryTarget: 'umd',
// //     },
// //
// //     externals: {
// //         vue: 'vue',
// //     },
// // });
//
// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.js/,
//                 loader: 'babel-loader',
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.vue/,
//                 loader: 'vue-loader',
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     'vue-style-loader',
//                     'css-loader'
//                 ]
//             }
//         ],
//     },
//     context: __dirname,
//
//     entry: './src/index.js',
//
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'index.js',
//         library: 'package_name',
//         libraryTarget: 'umd',
//     },
//
//     resolve: {
//         extensions: ['.js', '.vue'],
//     },
//     plugins: [
//         // make sure to include the plugin for the magic
//         new VueLoaderPlugin()
//     ],
//
// };


const path = require('path');
// const merge = require('webpack-merge');
//
//
// module.exports = merge(require('./webpack.base'), {
//     context: __dirname,
//
//     entry: './src/index.js',
//


// externals: {
//     vue: 'vue',
// },
// });


const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
        ],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files

            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: "file-loader"
            }

        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'package_name',
        libraryTarget: 'umd',
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: './src/index.js',
    externals: {
        vue: 'vue',
    },
}

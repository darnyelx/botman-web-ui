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
                test: /\.vue/,
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ],
    },

    resolve: {
        extensions: ['.js', '.vue'],
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
};

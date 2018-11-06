var path = require("path");



module.exports = {

    entry: "./js/app.js",

    output: {

        filename: "js/out.js",

        path: path.resolve(__dirname, ".")

    },

    mode : 'development', //production

    devtool: "source-map",

    watch : false,

    module : {

        rules: [

            {

                test: /\.js$/,

                exclude: /node_modules/,

                use: {

                    loader: 'babel-loader',

                    options: {

                        presets: ['@babel/preset-env']

                    }

                }

            },

            {

                test: /\.css$/,

                use: [

                    'style-loader',

                    'css-loader'

                ]

            },

            {

                test: /\.scss$/,

                use: [

                    'style-loader',

                    'css-loader',

                    'sass-loader'

                ]

            },

        ]

    },
    // plugins: [
    //     new BrowserSyncPlugin({
    //         // browse to http://localhost:3000/ during development,
    //         // ./public directory is being served
    //         host: 'localhost',
    //         port: 3000,
    //         server: { baseDir: ['.'] }
    //     })
    // ]

}
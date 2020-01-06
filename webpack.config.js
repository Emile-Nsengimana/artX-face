const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        stats: "minimal",
        historyApiFallback: {
            disableDotRule: true
        },
        port: 8000,
        contentBase: "./build"
    },
    entry: {
        main: ["./src/index.js"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
}
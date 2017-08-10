const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

const svgSpriteDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
    path.resolve(__dirname, 'app/public/icon'),  // 业务代码本地私有 svg 存放目录
];

module.exports = {
    entry: path.resolve('app/index.js'),
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: svgSpriteDirs,
            }
        ]
    },
    resolve: {
        mainFiles: ["index.web","index"],// 这里哦
        modules: ['app', 'node_modules', path.join(__dirname, './node_modules')],
        extensions: [
            '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx',
            '.js',
            '.jsx',
            '.react.js',
        ],
        mainFields: [
            'browser',
            'jsnext:main',
            'main',
        ],
    },
    devServer: {
        hot: true,
        port: 8080,
        headers: {
            'Access-Control-Allow-Origin': '*'

        },
        proxy: {
            "/api": {
                target: "http://localhost:8333",
                pathRewrite: {"^/api" : ""}
            }
        }
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/page/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/index'),
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        rules: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), use: 'babel-loader'},
            {test: /(\.css)$/, use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})},
            {test: /\.eot/, use: 'file-loader'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader'},
        ]
    }
};
import webpack from 'webpack';
import path from 'path';

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {test: /\.js$/, exclude: [/node_modules/], use: ['babel-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.svg$/, use: 'file-loader'}
        ]
    }
};

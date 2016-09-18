var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        app: [
            './src/client/index.js',
        ],
        vendor: [
            'react',
            'react-dom',
        ],
    },

    output: {
        path: "/",
        filename: 'app.js',
        publicPath: '/',
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        modules: [
            'client',
            'node_modules',
        ],
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
            }, {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },  {
                test: /\.less$/,
                loader: 'style!css!less'
            }, {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url?limit=100000&name=[name].[ext]'
            }, {
                test: /\.jsx*$/,
                exclude: [/node_modules/, /.+\.config.js/],
                loader: 'babel',
            }, {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
                loader: 'url-loader?limit=10000',
            }, {
                test: /\.json$/,
                loader: 'json-loader',
            }
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.js',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                CLIENT: JSON.stringify(true),
                'NODE_ENV': JSON.stringify('development'),
            }
        }),
    ]
};
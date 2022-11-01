import commonConfig  from './webpack.common.config.js';
import { merge } from 'webpack-merge';
import path from 'path';

const rootPath = path.resolve();

export default merge(commonConfig, {
    output: {
        filename: "[name].js",
        path: path.resolve(rootPath, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3001,
        static: path.resolve(rootPath, 'dist'),
        hot: true,
    },
    cache: true,
})


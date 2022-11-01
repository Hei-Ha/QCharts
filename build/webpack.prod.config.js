import commonConfig from './webpack.common.config.js';
import { merge } from 'webpack-merge';
import path from 'path';

const rootPath = path.resolve();

export default merge(commonConfig, {
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(rootPath, 'dist'),
        clean: true,
        pathinfo: false, // 输出结果不带路径信息，以提高性能
    },
    devtool: 'source-map',
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
})
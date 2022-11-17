import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import RemarkHTML from 'remark-html';

const rootPath = path.resolve();
export default {
    mode: process.env.NODE_ENV,
    entry: '/src/index',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react',
            template: path.resolve(rootPath, 'index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(less)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true,
                        }
                    },
                }]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx)$/i,
                use: ['babel-loader'],
                include: path.resolve(rootPath, 'src'),
            },
            {
                test: /\.(tsx|ts)$/i,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'remark-loader',
                        options: {
                            remarkOptions: {
                                plugins: [RemarkHTML],
                            },
                        },
                    }],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', 'md'],
        alias: {
            '@src': path.resolve(rootPath, 'src')
        }
    },
}
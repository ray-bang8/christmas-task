// import { DefinePlugin } from 'webpack'
// import pkg from 'webpack';
// const {DefinePlugin} = pkg;;
// // import { webpack } from "webpack";

// export const mode = 'development';
// export const devtool = 'cheap-module-source-map';
// export const plugins = [
//     new DefinePlugin({
//         'process.env.name': JSON.stringify('Vishwas')
//     })
// ];
import webpack from 'webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
export const mode = 'development'
export const devServer = {
    hot: true,
    open: true,
}
export const devtool = 'cheap-module-source-map'
export const plugins = [
    new webpack.DefinePlugin({
        'process.env.name': JSON.stringify('Vishwas'),
    }),
    new ReactRefreshWebpackPlugin(),
]
// export const devServer = {
//     hot: true,
// };

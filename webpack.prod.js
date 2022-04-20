import pkg from 'webpack';
const { DefinePlugin } = pkg;
export const mode = 'production'
export const devtool = 'source-map'
export const plugins = [
    new DefinePlugin({
        'process.env.name': JSON.stringify('Codevolution'),
    }),
]
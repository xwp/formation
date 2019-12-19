/**
 * External dependencies
 */
const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

/**
 * WordPress dependencies
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
    ...defaultConfig,
    entry: {
        components: './js/src/components.js',
        editor: './js/src/editor.js',
        blocks: './js/src/blocks.js',
        public: './js/src/public.js',
    },
    output: {
        path: path.resolve( __dirname, 'js/dist' ),
        filename: '[name].js',
        library: [ 'formation', '[name]' ],
        libraryTarget: 'this',
    },
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        ...defaultConfig.plugins,
        new MiniCssExtractPlugin( {
            filename: '../../css/[name].css',
        } ),
    ],
};

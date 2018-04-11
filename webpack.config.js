const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
    const isProduction = env === 'production';
    const cssExtract = new ExtractTextPlugin("styles.css"); 
    return {
        entry: './app.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                    presets: ['react', 'es2015']
                    }
                },
                {
                    test: /\.s?css$/,
                    use: cssExtract.extract({
                        fallback: "style-loader",
                        use: [
                            {
                                loader:  "css-loader",
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            cssExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: __dirname,
            historyApiFallback: true,
            publicPath: "/dist/"
        }
    }
}
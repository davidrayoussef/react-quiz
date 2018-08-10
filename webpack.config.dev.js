const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-module-source-map',
	entry: [
		'./src/main.js'
	],
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				enforce: 'pre',
        test: /\.js$/,
				exclude: /node_modules/,
				use: [
          'babel-loader',
          'eslint-loader',
        ]
      },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
	]
};

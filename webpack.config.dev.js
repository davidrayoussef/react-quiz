var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'./src/main.js'
	],
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	eslint: {
		emitWarning: true
	},
	module: {
		preLoaders: [
			{
				test: /\.js?$/,
				loaders: ['eslint-loader'],
				exclude: /node_modules/
			}
		],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		HtmlWebpackPluginConfig
	]
};

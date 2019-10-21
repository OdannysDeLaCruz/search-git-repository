const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	entry: './src/assets/js/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		port: 3000
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/estilos.css',
		})
	],
	module: {
		rules: [
			{
	      		test: /\.(sa|sc|c)ss$/,
	        	// use: [
	        	// 	{loader: 'style-loader'},
	        	// 	{loader: 'css-loader'},
	        	// ]

	        	use: [
	        		{
	        			loader: MiniCssExtractPlugin.loader,
	        			options: {
	        				publicPath: '../assets/scss/'
	        			}
	        		},
	        		'css-loader',
	        		'sass-loader'
	        	]
	      	}
		]
	}
}
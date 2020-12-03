const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src/index.js'),
		/*mobile: path.resolve(__dirname, 'src/utils/mobile.js')*/
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
		publicPath: 'dist'
	},
	devServer: {
		contentBase: 'dist/',
		open: true,
		port: '9080',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader'
				]	
			},
			{
				test: /\.eot|svg|ttf|woff/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						outputPath: 'assets/',
						name: '[name].[ext]'
					}
				}
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			inject: true,
			template: './public/index.html',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/styles.css'
		})
	]
}
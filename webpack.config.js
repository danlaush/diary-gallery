var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

// NODE_ENV to production
// uglify

var config = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{ 
				test: /\.(js)$/, 
				use: 'babel-loader' 
			},
			{ 
				test: /\.css$/, 
				use: ['style-loader', 'css-loader'] 
			}
		]
	},
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html'
		}),
		new CopyWebpackPlugin([
			{
				from: './app/data',
				to: 'data'
			},
			{
				from: './public',
				to: 'assets'
			}
		])
	]
};

if(process.env.NODE_ENV === 'production') { //production
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	)
}

module.exports = config;
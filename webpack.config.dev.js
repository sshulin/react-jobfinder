var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./client/app'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		rules: [
			//js
			{
				test: /\.js$/,
				use: ['babel-loader'],
				include: path.join(__dirname, 'client')
			},
			// css
			{
				test: /\.scss$/,
				include: path.join(__dirname, 'client'),
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: "file-loader",
      }
		]
	}
}
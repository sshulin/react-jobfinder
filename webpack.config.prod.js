var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [

		'./client/app'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
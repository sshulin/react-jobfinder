var webpack = require('webpack');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var path = require('path');
var express = require('express');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(devMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(hotMiddleware(compiler));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, 'localhost', function(err) {
	if(err) {
		console.log(err);
		return;
	}

	console.log('Listening at http://localhost:8080')
})
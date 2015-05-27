/*
*	@file app.js
*	Setup express webserver 
*/

(function(){
	'use strict';

	var express 	 = require('express'),
			app 			 = express(),
			bodyParser = require('body-parser');

	app.use(
		bodyParser.json()
	);

	// Routes
	app.use(
		'/',
		require('./routes/route.static')
	);

	module.exports = app;
})();
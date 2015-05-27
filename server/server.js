/*
*	@file server.js
*	Server config logic
*/

(function(){
	'use strict';

	var app 		= require('./app'),
			config 	= require('./config');

	app.listen(config.port, function () {
		console.log('Server started in ', config.env, ' mode, at port ', config.port);
	});
})();
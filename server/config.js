/*
*	@file config.js
*	
*/

(function(){
	'use strict';

	module.exports = {

		env: process.env.NODE_ENV || 'development',
		// port: process.env.PORT || 8080,
		port: 8080,
		host: '0.0.0.0'

	}
})();
/*
*	@file routes.static
*	Routes for static.
*/

(function(){
	'use strict';

	var express = require('express'),
			router  = express.Router(),
			config  = require('../config'),
			path 	  = require('path');

  var staticRoutes = [
    '^\/css',
    '^\/js',
    '^\/vendor',
    '^\/index\\.html',
    '^\/partials',
    '^\/images',
    '^\/fonts'
  ];
	router.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../../'+ '/index.html'));	
	});

  router.route(new RegExp(staticRoutes.join('|')))
	  .get(express.static(path.join(__dirname, '../../app/')));

	module.exports = router;
})();
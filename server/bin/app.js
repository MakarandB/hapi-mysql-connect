"use strict";

var Hapi = require('hapi');
var constants = require('../config/constants.js');
var routes = require('../routes');
var _ = require('underscore');

var options = {
	state : {
		cookies : {
			strictHeader : false
		}
	}
};
var host = constants.application['host'];
var port = constants.application['port'];
var server = Hapi.createServer(host, port, options);

server.route(routes.routes);

if (process.env.NODE_ENV !== 'test') {
	server.start();

	console.log('Server running in port #'+port);
}
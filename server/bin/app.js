"use strict";

var Hapi = require('hapi');
var constants = require('../config/constants.js');
var _ = require('underscore');

var options = {
	state : {
		cookies : {
			strictHeader : false
		}
	}
};
var host = 'localhost'; //constants.application['host'];
var port = '3000';//constants.application['port'];
var server = Hapi.createServer(host, port, options);

if (process.env.NODE_ENV !== 'test') {
	server.start();

	console.log('Server running in port #'+port);
}
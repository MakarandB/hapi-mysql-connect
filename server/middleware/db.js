"use strict";

var mysql = require('mysql');
var _ = require('underscore');
var constants = require('../config/constants.js');

module.exports = function() {
	var internals = {};
	var externals = {}

	internals.connect = function(userName, connectHandler) {
		var options = { 
			user: userName
		};
		_.extend(options, constants.database);
		var connection = mysql.createConnection(options);
		connection.connect(function(err) {
			if (err) return connectHandler(err, null);
		});
		return connectHandler(null, connection);
	};
	externals.query = function(params) {
		var sql = params.sql;
		var values = params.values;
		var queryHandler = params.callback;
		internals.connect(params.userName,function(err, connection) {
			if (err) return queryHandler(err, null);
			connection.query(sql, values, function(err, rows, fields) {
				queryHandler(err, rows);
				connection.end();
			});
		});
	};

	return externals;
}();

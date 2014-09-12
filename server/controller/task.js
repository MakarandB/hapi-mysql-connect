"use strict";

var Hapi = require('hapi');
//var Q = require('q');
//var taskDAO = require('src/dao/task');
//var _ = require('underscore');

//var ReplyHelper = require('src/controllers/reply-helper');

function TaskController(){};
TaskController.prototype = (function(){

	return {
		find: function find(request, reply) {

			//var helper = new ReplyHelper(request, reply);
			//var params = request.plugins.createControllerParams(request.query);

			//taskDAO.find(params, function (err, data) {
			//	helper.replyFind(err, data);
			//});
			  reply('hello from taskController');
		}
	}
})();

var taskController = new TaskController();
module.exports = taskController;
'use strict';
//var hapi        = require('hapi'),
var    joi         = require('joi'),
    wreck     = require('wreck');

var taskController = require('../controller/task');


var handler = {}
handler.serveWeather = function (request, reply) {
    wreck.get('http://weather.yahooapis.com/forecastrss?w=2502265', function (err, res, payload) {
            reply(err || payload); //return type is text/html but use JSON.parse() if you now the type is application/JSON
        });
};

var routes = [
    {
        method: 'GET',
        path : '/api/weather/{id}' ,
        config:{
           handler: handler.serveWeather
        }
    },{
         method : 'GET',
        path: '/api/people/{id}',
        config:{
            handler : function(req,reply){
                reply('hello ' + req.params.id);
            }
        }
    },  
    {
            method: 'GET',
            path: '/api/tasks/{task_id}',
            config : {
                handler: taskController.findByID,
                //validate: taskValidate.findByID
            }
    },
    {
        method: 'GET',
        path: '/api/tasks',
        config : {
            handler: taskController.find
            //validate : taskValidate.find
        }
    },
    {
        method: 'POST',
        path: '/api/tasks',
        config : {
            handler : taskController.insert,
            //validate : taskValidate.insert
        }
    },
    {
        method: 'PUT',
        path: '/api/tasks/{task_id}',
        config : {
            handler: taskController.update,
           // validate : taskValidate.update
        }
    },
    {
        method: 'DELETE',
        path: '/api/tasks/{task_id}',
        config : {
            handler: taskController.delete,
            //validate : taskValidate.delete
        }
    }

];

exports.routes = routes;
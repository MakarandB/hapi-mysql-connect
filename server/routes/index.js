'use strict';
//var hapi        = require('hapi'),
var    joi         = require('joi'),
    wreck     = require('wreck');

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
    },{
        method:'GET',
        path:'/public/{param*}',
        handler:{
            directory:{
                path: 'client',
                listing:false
            }
        }
    }

];

exports.routes = routes;
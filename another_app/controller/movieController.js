var Resource = require('resourcejs');
var movie = require('../modal').movies;

module.exports = function (app, route) {
    // // setup the controller for rest
    // var rest = restful.model('movie', app.models.movie).method(['GET', 'PUT', 'POST', 'DELETE']);
    // //register this endpoint with the application
    // rest.register(app, route);
    // //return middleware
    Resource(app, '', route, movie).rest();
    //return middleware
    return function(req,res,next){
        next();
    };
}
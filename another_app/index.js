var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// create the application
var app = express();

//Add middleware neceassary for rest api 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(methodOverride('X-HTTP-METHOD-OVERRIDE'));

// CORS SUpport
// allow api to be accessible anywhere
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Credentials', 'true');
    // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    next();
})

app.models = require("./modal");

//connect to mongo db
mongoose.connect('mongodb://localhost/myDb');
mongoose.connection.once('open', function () {
    // load the routes
    var routes = require('./routes');
    var controller = require('./controller/movieController')
    _.each(routes, function (controller, route) {
        app.use(route, controller(app, route));
    });
    console.log('Listening on port 3000...');
    app.listen(3000);
});



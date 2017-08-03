var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/myDb');

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});
var Person = mongoose.model("Person", personSchema);
app.use(bodyParser());
app.get('/person', function (req, res) {
   
    // Person.find(function (err, response) {
    //     res.json(response);
    // });
     res.render('person');
});
app.post('/person', function (req, res) {
    var personInfo = req.body; //Get the parsed information
    console.log(personInfo.name);
    console.log(personInfo.age);
    console.log(personInfo.nationality);
    if (!personInfo.name || !personInfo.age || !personInfo.nationality) {
        res.render('show_message', {
            message: "Sorry, you provided worng info", type: "error"
        });
    } else {
        var newPerson = new Person({
            name: personInfo.name,
            age: personInfo.age,
            nationality: personInfo.nationality
        });

        newPerson.save(function (err, Person) {
            if (err)
                res.render('show_message', { message: "Database error", type: "error" });
            else
                res.render('show_message', {
                    message: "New person added", type: "success", person: personInfo
                });
        });
    }
});
app.set('view engine', 'pug');
app.set('views', './views');
app.listen(3000);
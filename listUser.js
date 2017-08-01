var express = require('express');
var app = express();
var fs = require("fs");
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}
app.get('/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
       console.log(typeof data);
        var users = JSON.parse(data);
       console.log(typeof users)
        var user = users["user" + req.params.id]
        console.log(user);
        res.json(user);
    });
})
// change post to get
app.post('/addUser', function (req, res) {
    console.log('addUser')
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})
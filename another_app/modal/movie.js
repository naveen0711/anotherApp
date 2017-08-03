var mongoose = require('mongoose');

// create schema
var MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

//Export the movie schema
module.exports = mongoose.model('movie', MovieSchema);
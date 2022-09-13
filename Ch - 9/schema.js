//shape of documents in mongodb

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

module.exports = mongoose.model('courses', courseSchema);


// schema types :
// Array
// objectID
// Boolean
// buffer
// Date
// Number
// String
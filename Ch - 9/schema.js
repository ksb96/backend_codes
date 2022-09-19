//shape of documents in mongodb

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
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


//using validator(db) -- if a invalid(missing field/s) schema is trying to be saved in DB, then mongoose reject that     
const courseSchemaa = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: String,
    tags: {
        //custom validators - create an obj & then use the 'validate' method
        type: Array,
        validate:{
            validator: function (value) {
                return value && value.length > 0;
            },
            message: 'Should have atleast one tag'
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean,
    price: {
        type: Number,
        //build in validators - mongoose
        required: function () {
            return this.isPublished;
        }
    },
    category: {
        type: String,
        required: true,
        //req validation in an array of string
        enum: ['web', 'mobile', 'network']
    }
});

const course = mongoose.model('course', courseSchemaa);

async function createCourse() {
    const courses = new course({
        // name: 'xys',
        author: 'tyr',
        tags: [],
        isPublished: true,
        // price: 15,
        category:'xyz'
    });

    try {
        const result = await courses.save();
        console.log(result);
        //manual validation
        await courses.validate();
    } catch (err) {
        console.log(err.message);
    }

}
//function call
createCourse();
//connecting to mongodb(static)

const mongoose = require('mongoose');

//static url passing (local)
mongoose.connect('mongodb://localhost/playground')
    //success
    .then(() => console.log('Connected to mongodb...'))
    //failure
    .catch(err => console.error('Could not connect to mongodb...', err));



//dynamic url (production)
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //connection string
        const conn = await mongoose.connect(process.env.MONGO_URI, { //MONGO_URI - from config.env file
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        //success
        console.log('MongoDB connected');
    } 
    //failure
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB
**MongoDB - Production settings**
- Over here I have elaborated the basic/main scenarios/settings which are required for deploying a web app in ***production*** specific.

**Files**

***config.env*** - Setting the ***mongo cluster***(free). [FOR MORE INFO.](https://www.mongodb.com/docs/manual/reference/connection-string/)

```
MONGO_URI=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
```

***query.js*** - Finding the specific course/s(which client requested for) & returning the same to
                 the client. 
                 Also explain about '***Regex Expression - regular expression***'.

```
async function getCourses() {
    const courses = await Course
    .find({ author: 'kb', isPublished: true})
    .limit(10)
    .sort({ name: 1}) 
    .select({ name: 1, tags: 1});
    console.log(courses);
}

getCourses();
```

**regex**
```
async function getCourses() {
    const courses = await Course

    .find({ author: /^kb/ })
    
    .find({ author: /Bh$/i }) 
    
    .find({ author: /.*kb.*/i })
}

getCourses();
```

***schema.js*** - Data Modelling(i.e data structuring) in Mongodb.
                  **Mongoose** - A library which helps in modelling the database.
```
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
```

***server.js*** - Have shown ***'How to pass static url, while creating the server'***
                             & 
                  ***'Dynamic url, in production'***.

```
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected');
    } 
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB
```
                  


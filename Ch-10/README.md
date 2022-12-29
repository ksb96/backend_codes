**Database tweaking** 
- Over here I have implemented some tweking to create/save/update/delete in the *mongodb database*.

**Files**

***embedded.js*** - Demonstrated *CRUD* process.

**creating course**
```
async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
```

**saving course/s**
```
  const result = await course.save();
  console.log(result);
```

**find course**
```
async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}
```


***nosql.js*** - Created ***embedded documents*** & ***referenced documents***. 

**reference documents**
```
let author = {
    name: 'KB'
}

let course = {
    author : 'id'
}
```

**embedded documents**
```
let courses = {
    author: {
        name: 'KB'
    }
}
```


***objectid.js*** - Consists of the logic to **genereate** unique id & timestamp using mongoose.


***reference.js*** - Demonstrated *how to create a connection to your database* using [mongoose](https://mongoosejs.com/) & created a *schema*.

**connecting to DB**
```
mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
```

**schema**
```
async function createAuthor(name, bio, website) { 
  const author = new Author({
    name, 
    bio, 
    website 
  });
```


***transaction.js*** - Used a *third-party library* for **promised** based transactions in MongoDB.

**on server.js**
```
const Fawn = require('fawn');
Fawn.init('mongoose');
```
//handling HTTP POST request
//creating an array of courses
const courses = [{
        id: 1,
        course: 'course1'
    },
    {
        id: 2,
        course: 'course2'
    },
    {
        id: 3,
        course: 'course3'
    },
    {
        id: 4,
        course: 'course4'
    }
];

app.post('/api/courses', (req, res) => {
    //client req
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    //server res
    courses.push(course);
    res.send(course);
});

//Input validation
app.post('/api/courses', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) { //if the input length is NOT or LESS THAN 3
        //400 Bad request
        res.status(400).send('Provide name with atleast 3 characters');
        return;
    }
})

//Input validation
//using npm joi@13.01
app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required() //schema input validation{logic}
    };
    const result = Joi.validate(req.body, schema)
    if (result.error)
        return res.status(400).send(result.error);
})
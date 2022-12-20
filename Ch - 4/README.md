**Handling HTTP POST Request**

## Code Explanation - 

1) In the first code block, I have created an array of courses, which is to be consumed by the client.
2) Second block of code explains, the pushing of the whole array(course) to the server, using *POST* and getting a response(courses arrary) from the server.
3) Third block explains, the *Input Validation* on a input field.
4) Fourth block, is also of a *Input Validation* but by using a *npm 3rd party module* [Joi](https://www.npmjs.com/package/joi).

```
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

```

```
app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

```

```
app.post('/api/courses', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) { 
        res.status(400).send('Provide name with atleast 3 characters');
        return;
    }
});

```

```
app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema)
    if (result.error)
        return res.status(400).send(result.error);
});

```
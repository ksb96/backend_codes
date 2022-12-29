**Handling HTTP GET Request**

## Code Explanation - 

1) In the first code block, I have created an array of courses, which is to be consumed by the client.
2) Second block of code explains, the sending of whole array to the client, using *GET*.
3) Third block explains, the sending of a particular course(:id) as a response to the client, using *GET*.

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
    }];

```

```
app.get('/api/courses', (req,res)=>{
    res.send(courses);
});

```

```
app.get('/api/courses/:id', (req,res)=>{
    const getCourse = courses.find(c=> c.id === parseInt(req.params.id));
    if(!getCourse)
        res.status(404).send('Not found course with the ID');
        res.send(getCourse);
});

```
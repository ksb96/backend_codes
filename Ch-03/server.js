//handling HTTP GET request
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
    }];

//Sending the whole array to the client
app.get('/api/courses', (req,res)=>{
    res.send(courses);
});

//sending the particular course(:id) as a response to the client
app.get('/api/courses/:id', (req,res)=>{
    const getCourse = courses.find(c=> c.id === parseInt(req.params.id)); //looking for the particular course(:id) which client requested
    if(!getCourse) //if the requested course(:id) is not found, send the status
        res.status(404).send('Not found course with the ID');
        res.send(getCourse); //if found, respond it with the course(:id)
});
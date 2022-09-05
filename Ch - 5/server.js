//HTTP PUT req
app.put('/api/courses/:id', (req,res)=>{
    //finding the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    //if course(:id) NOT FOUND
    if(!course)
    return res.status(404).send('Not Found!');
    //if found, validate
    const result = validateCourse(req.body);
    //invalid
    if(result.error){
        res.status(400).send(result.error);
        return;
    }
    //update
    course.name = req.body.name;
    //returning the course to the client
    res.send(course);
});
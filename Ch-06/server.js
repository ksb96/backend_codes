//HTTP DELETE request
app.delete('/api/courses/:id', (req, res) => {
    //finding the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    //if course(:id) NOT FOUND
    if (!course)
        return res.status(404).send('Not Found!');
    //delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});
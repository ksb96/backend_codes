**Handling HTTP DELETE Request**

## Code Explanation - 

1) In the first block of the code we *(client)* need to find the course which we want to **delete**.
2) In the second code block, if the course is **NOT FOUND** -> return **404** *error*.
3) On the third block, *delete* the course and return *the deleted* course to the client.

```
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
```

```
if (!course)
    return res.status(404).send('Not Found!');
```

```
const index = courses.indexOf(course);
courses.splice(index, 1);
res.send(course);
});
```
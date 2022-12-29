**Handling HTTP PUT Request**

## Code Explanation - 

1) In the first block of the code we *(client)* need to find the course which we want to **update**.
2) In the second code block, if the course is **NOT FOUND** -> return **404** *error*.
3) In the third code block, when course is  **FOUND** -> **validate** the course. If the course is **INVALID** -> return **404** *error*.
4) On the final block, *update* the course and return *that* course to the client.

```
app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
```

```
    if (!course)
        return res.status(404).send('Not Found!');
```

```
 const result = validateCourse(req.body);
    if (result.error) {
        res.status(400).send(result.error);
        return;
    }
```

```
course.name = req.body.name;
    res.send(course);
```

```
});
```
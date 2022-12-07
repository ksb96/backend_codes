**Route Creation**

In this folder, I describe about how to create basic route in a nodejs application.
Where basic routing like - GET, POST, PUT & DELETE are elaborated.

- Basic code - 

**GET**
```
router.get('/add', ensureAuth, (req, res) => {
    res.render('');
})

```

**POST**
```
router.post('/', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id
        await Story.create(req.body)
        res.redirect('')
    } catch (err) {
        console.log(err)
        res.render('error/500')
    }
})

```

**PUT**
```
router.put('/:id', ensureAuth, async (req, res) => {
    try {
        let story = await Story.findById(req.params.id).lean()

        if (!story) {
            return res.render('error/404')
        }
        if (story.user != req.user.id) {
            res.redirect('/')
        } else {
            story = await Story.findOneAndUpdate({
                _id: req.params.id
            }, req.body, {
                new: true,
                runValidators: true,
            })

            res.redirect('/')
        }
    } catch (err) {
        console.error(err)
        return res.render('error/500')
    }
})

```

**DELETE**
```
router.delete('/:id', ensureAuth, async (req, res) => {
   try {
     await Story.remove({ _id: req.params.id })
     res.redirect('/')
   } catch (err) {
    console.error(err)
    return res.render('error/500')
   }
})
```
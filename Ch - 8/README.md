**Template Engine**

- Generating dynamic 'html' pages & returning it to the client.
- Ex :- ***of many, some few are listed down below***
        [pug] (https://github.com/pugjs/pug),
        [EJS] (https://github.com/mde/ejs),
        [Nunjucks] (https://github.com/mozilla/nunjucks),
        [hbs] (https://github.com/pillarjs/hbs)


**on server.js**
- Setting the template engine,
- Setting the values for the ***variables*** which are declared in ejs file(i.e, index.pug).

*setting the template engine.*
```
app.set('view engine', 'pug');
app.set('views', './views');
```

*setting the values*
```
app.get('/',(req,res)=>{
    res.render('index',{
        title:'My App',
        messsage: 'Hi'
    });
});
```
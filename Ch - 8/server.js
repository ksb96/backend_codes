//Template engines(ejs) -- generating dynamic 'html' & returning it to the client
// on server.js file
app.set('view engine', 'pug');
app.set('views', './views'); //default dir(optional)

//setting the values for the 'var's which are declared in ejs file(pug)
app.get('/',(req,res)=>{
    res.render('index',{
        title:'My App',
        messsage: 'Hi'
    });
});
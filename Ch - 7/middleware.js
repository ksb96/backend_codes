//middleware - a function which takes a req object, either gives a response to the client or passes control to another middleware
//below codes should be kept in the 'server.js' file
//in-build middleware
app.get('/', (req,res) =>{
    res.send('Hi');
});

app.use(express.json()); //parse the 'req.body' at runtime


//static file upload
express.static('filename'); //'filename' - 'public/img/photo.png'
//middleware - a function which takes a req object, either gives a response to the client or passes control to another middleware
//in-build middleware
app.get('/', (req,res) =>{
    res.send('Hi');
});

app.use(express.json()); //parse the 'req.body' at runtime
//Routes
//read values(:id) from api & giving response to client
app.get('/api/courses/:id', (req,res)=>{ //the api which is getting hit
    res.send(req.params.id); //giving response to client with that :id which is requested
});

//read query parameters
app.get('localhost:5000/api/courses/2020/1/?sortBy=name', (req,res)=>{ //query related address
    res.send(req.query); //giving response to client with the exact data(over here is the 'courses' with year '2020' & sorted by name) which is requested
});



//read a file(local) - asyn + sync
//async
var fs = require('fs');

fs.readFile('filename.txt', (err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('async data is - ' + data.toString());
    }
});
//sync
var data = fs.readFileSync('filename.txt');
console.log('Sync data is - ' + data.toString());
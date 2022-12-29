//creating a server + assigning port (statically)
app.get('/', (req,res)=>{
    res.send('Hello'); // when we get a req. from root(or a webpage), we give a response(to client) -> 'Hello'
})
app.listen(3000, ()=>console.log('Listening to port 3000'));



//Assigning a port value (Dynamically)
const port = process.env.PORT || 3000; //var created for port var
app.listen(port, () =>
    console.log(`Listening to ${port}`))

// setting the port value (on windows)
// on cmd
// set PORT=5000


//very basic server creation
var http = require('http');
http.createServer(function (request,response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('hello');
    response.end();
}).listen(8080);

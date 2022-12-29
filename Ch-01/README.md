**Server Creation**

***In this folder, I describe about how to create a basic server using nodejs.***

- Basic code - 
```

var http = require('http');
http.createServer(function (request,response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('hello');
    response.end();
}).listen(8080);

```

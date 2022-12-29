**In this folder, I describe about two main topics which needs to be noted while creating a web server using nodejs.**

- Middleware.
- Enviroment. 

**customMiddleware.js**
    - Added the ***third party*** middleware [morgan](https://www.npmjs.com/package/morgan).

```
app.use(morgan('tiny'));
```

**enviroment.js**
    - Detecting the current enviroment ***[local, production]*** the web application is running on.

```
app.get('env');
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
```

**middleware.js**
    - A function which takes a request object, either gives a response to the client or passes
      control to another middleware.
      Ex - [morgan](https://www.npmjs.com/package/morgan) ...

```
app.get('/', (req,res) =>{
    res.send('Hi');
});

app.use(express.json());
```
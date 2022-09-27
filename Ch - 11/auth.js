// authentication - is the process of identifying if the user is who they claim they are
// authorization - is that the user has right permission to perform the given operation

const { Server } = require("http")

// on Server.js
const users = require('./routes/reg');
const auth = require(); // ./routes/auth

app.use('/api/users',users);
app.use('/api/auth',auth);


router.post('/', async(req,res)=>{
    //auth
    const { error } = validate(req.body);
    if(error)
    return res.status(400).send(error.details[0].message);
    //email
    let user = await User.findOne({ email: req.body.email });
    if(!user)
    return res.status(400).send('Invalid email or password');
    //pswd
    let validPassword = await bcrypt.compare(req.body.password, user.password );
    if(!validPassword)
    return res.status(400).send('Invalid email or password');

    //valid login
    res.send(true);
});
// authentication - is the process of identifying if the user is who they claim they are
// authorization - is that the user has right permission to perform the given operation

const { Server } = require("http");
const config = require('config');
const jwt = require('jsonwebtoken');

// on Server.js
const users = require('./routes/reg');
const auth = require(); // ./routes/auth
const config = require('config');

if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
};

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

    //generating token
    const token = jwt.sign({ _id: user._id}, config.get('jwtPrivateKey'));
    res.send(token);
});
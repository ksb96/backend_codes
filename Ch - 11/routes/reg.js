const mongoose = require('mongoose');
const express = require('express');
const router = require('router');
const {User, validate} = require('./Ch - 11/models/user');
const lodash = require('lodash'); //npm 
const bcrypt = require('bcrypt'); //npm

router.post('/', async(req,res)=>{
    const { error } = validate(req.body);
    if(error)
    return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if(user)
    return res.status(400).send('User already exists!');

    //new user 
    user = new User(lodash.pick(req.body, ['name', 'email', 'password'])); //n no.of props can be used(user req)
    //hash
    const salt = await bcrypt.genSalt(10); //random string
    user.password = await bcrypt.hash(user.password, salt);
    //old style
    // user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });

    await user.save();
    // res.send(user);
    res.send(lodash.pick(user, ['name', 'email']));
});

module.exports = router;


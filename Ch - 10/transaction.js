//fawn - npm i fawn
//on server.js

const Fawn = require('fawn');

Fawn.init('mongoose');

//fawn operation
try {
    new Fawn.Task()
        .save()
        .update({}, {})
        .run();

    res.send();
} catch (ex) {
    res.status(500).send('Server Error');
}
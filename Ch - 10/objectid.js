// _id: 12dfer45trgy67hyujuhygtf - 24 bits

//12 bytes
    //4 bytes: timestamp
    //3 bytes: machine identifier
    //2 bytes: process identifier
    //3 bytes: counter

    //to generate a unique id & timestamp using mongoose
    const mongoose = require('mongoose');

    const id = new mongoose.Types.ObjectId();
    console.log(id.getTimestamp());

    //valid id
    const isValid = mongoose.Types.ObjectId.isValid('1234');
    console.log(isValid);
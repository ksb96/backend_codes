// Global methods
// setTimeout - wait for few milli-second to execute a function
function print() {
    console.log('hi');
}
setTimeout(print, 5000);

// setInterval - on regular interval
function print() {
    console.log('hi');
}
setInterval(print, 5000);



// modules
// app.js
var variable = require('file.js');
variable.fun();
// file.js
function fun() {
    console.log('printing something');
}
module.exports.fun = fun; //module.exports(fun);



//event
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}
//Assign the eventhandler to an event: - listen
eventEmitter.on('scream', myEventHandler);
//Fire the 'scream' event:
eventEmitter.emit('scream');



//stream - read , write
//read
var fs = require('fs');

var readableStream = fs.createReadStream('filename.txt');
var data = '';
readableStream.setEncoding('UTF8');
readableStream.on('data', (chunk) => {
    data += chunk;
});
readableStream.on('end', () => {
    console.log(data);
});

//write
var fs = require('fs');

var writeData = 'Hi';
var writeableStream = fs.createWriteStream('outputfile.txt');
writeableStream.write(writeData, 'UTF8');
writeableStream.end();
writeableStream.on('finish', () => {
    console.log('write complete!');
});


//pipes
var fs = require('fs');

var readableStream = fs.createReadStream('file1.txt'); //read the content of this file
var writeableStream = fs.createWriteStream('file2.txt'); //write it into(change/overwright!)
readableStream.pipe(writeableStream); //file1 -> file2
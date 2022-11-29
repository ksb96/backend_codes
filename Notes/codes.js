// Global methods
// setTimeout - wait for few milli-second to execute a function
    function print(){
            console.log('hi');
    }
    setTimeout(print,5000);

    // setInterval - on regular interval
    function print(){
            console.log('hi');
    }
    setInterval(print,5000);



// modules
// app.js
var variable = require('file.js');
variable.fun();
// file.js
function fun() {
    console.log('printing something');
}
module.exports.fun = fun; //module.exports(fun);

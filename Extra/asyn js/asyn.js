console.log('Before'); //sync
//asyn 
setTimeout(()=>{
    console.log('fetching data from DB');
}, 2000);
console.log('After'); //sync


//sync - blocking (ex - waiter takes the order and wait for the food to be prep. and then moves to take another order)
//asyn - non-blocking (ex - waiter takes an order & moves to another table)
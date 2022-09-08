//gives a result of an asyn operation
//promise is an object which holds an eventual result of an asyn operation

const p = new Promise((resolve,reject) =>{
    //asyn
    setTimeout(() =>{
        resolve(1); //success
        reject(new Error('message')); //failure
    }, 2000);
});
//return promise
p.then(result => console.log('Result', result)).catch(err => console.log('Error', err.message));
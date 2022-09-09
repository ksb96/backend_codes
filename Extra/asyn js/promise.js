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

//git username
function getUser(id) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('fetching user from db');
            resolve({id: id, gitUserName: 'kk'});
        }, 2000);
    });
}

//consume promises(chain method)
getUser(1).then(user => getRepositories(user.gitUserName)).catch(err => console.log('Error', err.message));
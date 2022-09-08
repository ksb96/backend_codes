// when an asyn function does the fetching(data) and return an obj(of the data), the callback return that obj to the caller(user)
//callback
getRepo(user.user, (repo) =>{
    console.log('Repo', repo);
});

function getRepo(user, callback) {
    setTimeout(()=>{
        console.log('fetching git repo'); //optional
        callback(['repo1', 'repo2', 'rep3']);
    }, 2000);
}
//asyn & await -- write asyn code in a sync way
//await is always used inside a defined function(asyn)
//wrap code inside an try-catch block

async function displayUserName() {
    try {
        const repos = await getRepositories(user.gitUserName);
        console.log(repos);
    } catch (err) {
        console.log('Error', err.message)
    }
}

displayUserName();
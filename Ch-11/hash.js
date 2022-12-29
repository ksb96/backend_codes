const bcrypt = require('bcrypt');

async function run(){
    const salt = await bcrypt.genSalt(10); //random string
    const hashed = await bcrypt.hash('123', salt);
    console.log(salt); //generates a random string which makes the hash unpredictable 
    console.log(hashed);
}

run();
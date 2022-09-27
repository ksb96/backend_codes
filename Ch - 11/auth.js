// authentication - is the process of identifying if the user is who they claim they are
// authorization - is that the user has right permission to perform the given operation

const { Server } = require("http")

// on Server.js
const users = require('./routes/reg');

app.use('/api/users',users);
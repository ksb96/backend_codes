**Configuring Application(E2E)** - ***except views excluded***

**File Structure**
    config
        |
        |---> auth.js
        |---> key.js
        |---> passport.js
    models
        |
        |---> user.js
    routes
        |
        |---> index.js
app.js


**config - auth.js** - Used a  *third-party module* - [flash](https://www.npmjs.com/package/req-flash) for creating all types of flash messages for an application(express).


**config - key.js** - Elabroated the use of [mongodb - cluster](https://www.mongodb.com/basics/clusters/mongodb-cluster-setup)


**config - passport.js** - Elabroated the **authentication** logic for a user by using a  *third-party module* - [bcrypt](https://www.npmjs.com/package/bcrypt)

---------------------------------------------------------------------------------------------

**models - user.js** - Database schema.

---------------------------------------------------------------------------------------------

**routes - index.js** - Created the routing path to respond to client requests. 

---------------------------------------------------------------------------------------------

**app.js** -  A concatenation of application's files into one.
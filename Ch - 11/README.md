**Models** & **Routes**
- Here, I have explained about the **project structure**(mainly about models & routes) which needs to be maintained while creating an **nodejs** based application.

**File Structure**
    models
        |
        |----user.js
    routes
        |
        |----reg.js
auth.js
hash.js


**models --> user.js** - Structured the schema & added the *third-party modules*(which are obviously required).


**routes --> reg.js** - Related to **basic** routing for an app & **error status code**.


**auth.js** - Authenticating user's **email**, **password**.


**hash.js** - Used a *third-party npm-library* [bcrypt](https://www.npmjs.com/package/bcrypt), to hash passwords of the user/s.

```
const bcrypt = require('bcrypt');
```
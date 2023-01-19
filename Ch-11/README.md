**Authentication** & **JWT Tokens**
- Here, I have explained about **authenticating** user and **generating tokens**.

**File Structure**

| Folders  | Files(.js) |
| -------- | -------------|
| models  | user.js |
| routes  | reg.js  |
| {root}  | auth.js |
| {root}  | hash.js |    

**models --> user.js** - Structured the schema & added the *third-party modules*(which are obviously required).


**routes --> reg.js** - Related to **basic** routing for an app & **error status code**.


**auth.js** - Authenticating user's **email**, **password**, **generating token**[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).

**Set JWT Token** - For Windows use - *set* in CLI.

```
Ex - set test_jwtPrivateKey=1234
```

**hash.js** - Used a *third-party npm-library* [bcrypt](https://www.npmjs.com/package/bcrypt), to hash passwords of the user/s.

```
const bcrypt = require('bcrypt');
```
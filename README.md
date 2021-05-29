# auth-api

## About 
Authroiztion limits for user, writer, editor and admin, each account has a different authoroties and the higher one it the admin 
<hr>

## Author
Emran Aloul
<hr>

## Links

* [Pull Request](https://github.com/emranaloul/auth-api/pull/1)
* [demployment](https://emran-auth-api.herokuapp.com/)
* [Actions](https://github.com/emranaloul/auth-api/actions)
* [Repo](https://github.com/emranaloul/auth-api)

<hr>

## Setup
1. `(.env)` file 

```
PORT=6000
MANGOOSE_URI=mongodb+srv://emran:Ltuc@1234@cluster0.32b6w.mongodb.net/auth
SECRET=1111
```
2. Install the following dependencies

```
npm init -y 
npm i cors dotenv express morgan mongoose
npm i -D jest supertest
npm i @code-fellows/supergoose 
mongod --dbpath=/Users/path/to/data/db

```
## Running the app 
1. clone the repo.
2. Enter the command `npm start`
3. Use endpoints :
   ## signup

  ### *  `/api/v2/signup`

<br>

- **Method** : post 
- **CRUD Operation** : Create /api/v2 Add username and password
- **Response Body**   : JSON

```
{
    "user": {
        "_id": "60ad612eee763b39542cd13b",
        "username": "emranaloul92",
        "password": "$2b$10$9CRuuQatFM4MsKVoB3PUsOrZcjcNqx.u.0UocR.GEwb.qzqozNAOW",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtcmFuYWxvdWw5MiIsImlhdCI6MTYyMTk3NTM0MiwiZXhwIjoxNjIxOTc1OTQyfQ.zB5bakxJvK19wZvSg0ac6tQAsEQQdOJqdgQlMrSEiS8"
}

```
   ## sigin
  ### * `/api/v2/signin`
<br>

- **Method** : post 
- **CRUD Operation** : signin to exist user
- **Response Body**  : JSON

```
{
    "user": {
        "_id": "60ad612eee763b39542cd13b",
        "username": "emranaloul92",
        "password": "$2b$10$9CRuuQatFM4MsKVoB3PUsOrZcjcNqx.u.0UocR.GEwb.qzqozNAOW",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtcmFuYWxvdWw5MiIsImlhdCI6MTYyMTk3NTM0MiwiZXhwIjoxNjIxOTc1OTQyfQ.zB5bakxJvK19wZvSg0ac6tQAsEQQdOJqdgQlMrSEiS8"
}

```

## users
  ### * `/api/v2/users`
<br>

- **Method** : get 
- **CRUD Operation** : getting current users
- **Response Body**  : JSON

```
[
    "omar",
    "Emran",
    "Emrann",
    "emranaloul",
    "emran",
    "emranaloul92"
]
```

## secret
  ### * `/api/v2/users`
<br>

- **Method** : get 
- **CRUD Operation** : sign in using 
- **Response Body**  : JSON

```
Welcome to the secret area!
```
### *  `/api/v1/food`

<br>

- **Method** : GET 
- **CRUD Operation** : Read / Gets All Food Records
- **Response Body**   : JSON

```
{
    "_id": "60ae79cc48e0df21f0e4d304",
    "name": "emran",
    "calories": 90,
    "type": "FRUIT",
    "__v": 0
}

```
<br>

- **Method** : POST 
- **CRUD Operation** : Create / Add a Record
- **Response Body**   : JSON

```
   {
    "_id": "60ae79cc48e0df21f0e4d304",
    "name": "emran",
    "calories": 90,
    "type": "FRUIT",
    "__v": 0
}

```
<br>

 ### * `/api/v1/food/id`
<br>

- **Method** : GET 
- **CRUD Operation** : Read / Get One Record
- **Response Body**   : JSON
```
    {
    "_id": "60ae79cc48e0df21f0e4d304",
    "name": "emran",
    "calories": 90,
    "type": "FRUIT",
    "__v": 0
}

```
<br>

- **Method** : PUT 
- **CRUD Operation** : UPDATE / Update a Record
- **Response Body**   : JSON
```
    {
    "_id": "60ae79cc48e0df21f0e4d304",
    "name": "emran",
    "calories": 90,
    "type": "FRUIT",
    "__v": 0
}
``` 
<br>

- **Method** : DELETE 
- **CRUD Operation** : DELETE / Delete a Record
- **Response Body**   : JSON

```
   {
    "_id": "60ae79cc48e0df21f0e4d304",
    "name": "emran",
    "calories": 90,
    "type": "FRUIT",
    "__v": 0
}

```
<br><br><br>
<hr>
<br><br>

   ## Clothes
  ### * `/api/v1/clothes`
<br>

- **Method** : GET 
- **CRUD Operation** : Read / Gets All clothes Records
- **Response Body**  : JSON

```
[
    {
        "_id": "60a56ce6c837cb27d79d0d94",
        "name": "shirt",
        "__v": 0
    },
    {
        "_id": "60a56cfac837cb27d79d0d95",
        "name": "jeans",
        "__v": 0
    }
]

```
<br>

- **Method** : POST 
- **CRUD Operation** : Create / Add a Record
- **Response Body**   : JSON
```
{
        "_id": "60a56cfac837cb27d79d0d95",
        "name": "jeans",
        "__v": 0
    }

```
<br>

 ### * `/api/v1/clothes/id`

<br>

- **Method** : GET 
- **CRUD Operation** : Read / Get One Record
- **Response Body** : JSON
```
 {
    "_id": "60aec8b0d3c9567236630ded",
    "name": "emran",
    "color": "90",
    "size": "fruit",
    "__v": 0
}

```
<br>

- **Method** : PUT 
- **CRUD Operation** : UPDATE / Update a Record
- **Response Body**  : JSON
```
 {
    "_id": "60aec8b0d3c9567236630ded",
    "name": "emran",
    "color": "90",
    "size": "fruit",
    "__v": 0
}

```
<br>

- **Method** : DELETE 
- **CRUD Operation** : DELETE / Delete a Record
- **Response Body**   : JSON

```
 {
    "_id": "60aec8b0d3c9567236630ded",
    "name": "emran",
    "color": "90",
    "size": "fruit",
    "__v": 0
}


4. Test . 
* There's 2 test files . basic-auth-middleware.test.js basic-auth-middleware.test.js router.test.js
* In terminal run :

```
```
npm test

```


## UML Diagram
![auth-api](auth-api.png)

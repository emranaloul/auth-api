'use strict';

process.env.SECRET = "toes";

const supergoose = require('@code-fellows/supergoose');
const server = require('../src/server').app;
const bearer = require('../src/auth/middleware/bearer');

const mockRequest = supergoose(server);

let users = {
  admin: { username: 'admin', password: 'password' },
  editor: { username: 'editor', password: 'password' },
  user: { username: 'user', password: 'password' },
};

describe('Auth Router', () => {

  Object.keys(users).forEach(userType => {

    describe(`${userType} users`, () => {

      it('can create one', async () => {

        const response = await mockRequest.post('/api/v2/signup').send(users[userType]);
        const userObject = response.body;

        console.log('userObject', userObject)

        expect(response.status).toBe(201);
        expect(userObject.token).toBeDefined();
        expect(userObject.user._id).toBeDefined();
        expect(userObject.user.username).toEqual(users[userType].username)

      });
    });

      it('can signin with basic', async () => {

        const response = await mockRequest.post('/api/v2/signin')
          .auth(users[userType].username, users[userType].password);

        const userObject = response.body;
        expect(response.status).toBe(200);
        expect(userObject.token).toBeDefined();
        expect(userObject.user._id).toBeDefined();
        expect(userObject.user.username).toEqual(users[userType].username)

      });


    });

    });

    describe('bad logins', () => {
      it('basic fails with known user and wrong password ', async () => {

        const response = await mockRequest.post('/api/v2/signin')
          .auth('admin', 'xyz')
        const userObject = response.body;

        expect(response.status).toBe(403);
        expect(userObject.user).not.toBeDefined();
        expect(userObject.token).not.toBeDefined();

      });

      it('basic fails with unknown user', async () => {

        const response = await mockRequest.post('/api/v2/signin')
          .auth('nobody', 'xyz')
        const userObject = response.body;

        expect(response.status).toBe(403);
        expect(userObject.user).not.toBeDefined();
        expect(userObject.token).not.toBeDefined()

      });
    });

<<<<<<< HEAD
     
=======
   
    })

  });

});
>>>>>>> ddc89b14381dd582e50883c34bdb763df4f286d2

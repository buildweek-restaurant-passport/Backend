const bcrypt = require('bcryptjs');
const knex = require('../../config/database');
const createModel = require('./users-model');

const User = createModel(knex);

const userDetails = {
  firstName: 'Fake',
  lastName: 'AllFake',
  password: '123456',
  email: 'fake@yahoo.com',
  cityId: '111-888-000',
  city: 'Lagos',
};

let createdUser = {};

describe('User Model helper functions Test suite', () => {
  beforeAll(async () => {
    await knex('users').truncate();
  });

  describe('createUser(user) Test suite', () => {
    it('Should insert new user with given object', async () => {
      userDetails.password = await bcrypt.hash(userDetails.password, 10);
      const user = await User.createUser(userDetails);
      createdUser = user;

      expect(user).toMatchObject({
        firstName: 'Fake',
        lastName: 'AllFake',
        email: 'fake@yahoo.com',
        cityId: '111-888-000',
        city: 'Lagos',
      });
    });
  });

  describe('getById(id) Test suite', () => {
    it('Should get a single user', async () => {
      const user = await User.getById(createdUser.id);

      expect(user).toMatchObject({
        firstName: 'Fake',
        lastName: 'AllFake',
        email: 'fake@yahoo.com',
        cityId: '111-888-000',
        city: 'Lagos',
      });
    });
  });

  describe('getByEmail(email) Test suite', () => {
    it('Should get a single user by email', async () => {
      const user = await User.getByEmail(createdUser.email);

      expect(user).toMatchObject({
        firstName: 'Fake',
        lastName: 'AllFake',
        email: 'fake@yahoo.com',
        cityId: '111-888-000',
        city: 'Lagos',
      });
    });
  });

  describe('update(id, changes) Test suite', () => {
    let newDetails = {};

    beforeAll(() => {
      newDetails = {
        id: createdUser.id,
        firstName: 'Fake',
        lastName: 'AllFake',
        email: 'fake@yahoo.com',
        cityId: '111-888-000',
        city: 'Abuja',
      };
    });

    it('Should update a user details given id is valid', async () => {
      const updatedUserDetails = await User.update(createdUser.id, newDetails);

      expect(updatedUserDetails).toMatchObject(newDetails);
    });
  });

  describe('remove(id) Test suite', () => {
    it('Should delete a user given the id is valid', async () => {
      const deletedRows = await User.remove(createdUser.id);

      expect(deletedRows).toBe(1);
    });
  });
});

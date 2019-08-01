const superTest = require('supertest');
const app = require('../../index');
const db = require('../../../config/database');

const request = superTest(app);

const user = {
  firstName: 'June',
  lastName: 'Demy',
  password: '123456',
  email: 'june@gmail.com',
  cityId: '10004-3333-555',
  city: 'New York city',
};

beforeAll(async () => {
  /* Runs before all tests */
  await db('users').truncate();
});

// [/api/v1/auth/register] [SUCCESS]
describe('[POST] [/api/v1/auth/register] Register Test suite [SUCCESS]', () => {
  let response = null;

  beforeAll(async () => {
    /* Runs before all tests */
    response = await request.post('/api/v1/auth/register').send(user);
  });

  it('Should return response body as JSON', () => {
    expect(response.type).toBe('application/json');
  });

  it('Should respond with status code of 201', () => {
    expect(response.status).toEqual(201);
  });

  it('Should have response body with success', () => {
    expect(response.body.success).toBeTruthy();
  });

  it('Should have response body of user object', () => {
    expect(response.body.message).toBe('New user created');
    expect(response.body.body).toHaveProperty('user');
  });

  it('Should have response body with success true', () => {
    expect(response.body.success).toBeTruthy();
  });

  it('Should have a response body with token', () => {
    expect(response.body.body).toHaveProperty('token');
  });
});

// [/api/v1/auth/register] [FAILURE]
describe('[POST] [/api/v1/auth/register] Register Test suite [FAILURE]', () => {
  it('Should respond with status code of 400 on empty request body', async () => {
    const response = await request.post('/api/v1/auth/register').send({});
    expect(response.status).toEqual(400);
  });

  it('Should respond with status code of 409 if user already exist', async () => {
    const response = await request.post('/api/v1/auth/register').send({
      firstName: 'June',
      lastName: 'Demy',
      password: '123456',
      email: 'june@gmail.com',
      cityId: '10004-3333-555',
      city: 'New York city',
    });
    expect(response.status).toEqual(409);
  });
});

// [/api/v1/auth/login] [SUCCESS]
describe('[POST] [/api/v1/auth/login] Login Test suite [SUCCESS]', () => {
  let response = null;

  beforeAll(async () => {
    /* Runs before all tests */
    response = await request.post('/api/v1/auth/login').send({
      email: user.email,
      password: user.password,
    });
  });

  it('Should return response body as JSON', () => {
    expect(response.type).toBe('application/json');
  });

  it('Should respond with status code of 200', () => {
    expect(response.status).toEqual(200);
  });

  it('Should have response body of user object', () => {
    expect(response.body.message).toBe('Log in successful');
    expect(response.body.body).toHaveProperty('user');
  });

  it('Should have response body with success true', () => {
    expect(response.body.success).toBeTruthy();
  });

  it('Should have a response body with token', () => {
    expect(response.body.body).toHaveProperty('token');
  });
});

// [/api/v1/auth/register] [FAILURE]
describe('[POST] [/api/v1/auth/login] Register Test suite [FAILURE]', () => {
  it('Should respond with status code of 400 on empty request body', async () => {
    const response = await request.post('/api/v1/auth/login').send({});
    expect(response.status).toEqual(400);
  });

  it('Should respond with status code 404', async () => {
    const response = await request.post('/api/v1/auth/login').send({
      password: '123456',
      email: 'junefake@gmail.com',
    });
    expect(response.status).toEqual(404);
  });

  it('Should respond with User does not exist', async () => {
    const response = await request.post('/api/v1/auth/login').send({
      password: '1234566',
      email: 'june77@gmail.com',
    });
    expect(response.body.message).toEqual('User does not exist');
  });

  it('Should respond with status code 400', async () => {
    const response = await request.post('/api/v1/auth/login').send({
      password: '12345688',
      email: 'june@gmail.com',
    });
    expect(response.status).toEqual(400);
  });
});

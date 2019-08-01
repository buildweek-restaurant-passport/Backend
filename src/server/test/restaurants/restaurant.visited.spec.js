/* eslint-disable no-tabs */
const superTest = require('supertest');
const app = require('../../index');

const request = superTest(app);

describe('[POST] [/api/v1/auth/restaurants] Create Visited Restaurant Test suite [SUCCESS]', () => {
  let response = {};

  beforeAll(async () => {
    response = await request.post('/api/v1/auth/register').send({
      firstName: 'matt',
      lastName: 'matt',
      password: '123456',
      email: 'matt@gmail.com',
      username: 'matt20',
    });

    const { token } = response.body.body;

    response = await request.post('/api/v1/restaurants/1/visited').set('Authorization', token);
  });

  it('Should return response body as JSON', () => {
    expect(response.type).toBe('application/json');
  });

  it('Should respond with status code of 201', () => {
    expect(response.status).toEqual(201);
  });

  it('Should have response body of restaurant object', () => {
    expect(response.body).toHaveProperty('body');
  });

  it('Should have response body with success true', () => {
    expect(response.body.success).toBeTruthy();
  });
});

/* eslint-disable no-tabs */
const superTest = require('supertest');
const db = require('../../../config/database');
const app = require('../../index');

const request = superTest(app);

const restaurant = {
  name: 'Famous Amadeus Pizza',
  country: 'US',
  city: 'New York City',
  type: 'italian',
  description:
		'This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure.',
};

beforeAll(async () => {
  /* Runs before all tests */
  await db('restaurants').truncate();
});

// [/api/v1/auth/restaurants] [SUCCESS]
describe('[POST] [/api/v1/auth/restaurants] Create Restaurant Test suite [SUCCESS]', () => {
  let response = null;

  beforeAll(async () => {
    /* Runs before all tests */
    response = await request.post('/api/v1/auth/register').send({
      firstName: 'dele',
      lastName: 'dolo',
      password: '123456',
      email: 'dele@gmail.com',
      city: 'New York city',
    });

    const { token } = response.body.body;

    response = await request
      .post('/api/v1/restaurants')
      .send(restaurant)
      .set('Authorization', token);
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

  it('Should have response body of restaurant object', () => {
    expect(response.body).toHaveProperty('body');
    expect(response.body.body).toMatchObject(restaurant);
  });

  it('Should have message body', () => {
    expect(response.body.message).toBe('New restaurant created');
  });

  it('Should have response body with success true', () => {
    expect(response.body.success).toBeTruthy();
  });
});

// [/api/v1/auth/restaurants] [FAILURE]
describe('[POST] [/api/v1/auth/restaurants] Invalid token Test suite [FAILURE]', () => {
  let response = null;

  beforeAll(async () => {
    response = await request
      .post('/api/v1/restaurants')
      .send(restaurant)
      .set('Authorization', '');
  });

  it('Should return response body as JSON', () => {
    expect(response.type).toBe('application/json');
  });

  it('Should respond with status code of 401', () => {
    expect(response.status).toEqual(401);
  });
});

describe('Restaurant [GET (/api/v1/restaurants)] Test suite', () => {
  let response = null;

  beforeAll(async () => {
    /* Runs before all tests */
    response = await request.get('/api/v1/restaurants');
  });

  it('Should respond with status code of 200', async () => {
    expect(response.status).toEqual(200);
  });

  it('Should have response body with success true', () => {
    expect(response.body.success).toBeTruthy();
  });

  it('Should have response body ', () => {
    expect(response.body.message).toBe('All restaurants');
  });

  it('Should have response data of length 1', () => {
    expect(response.body.body).toHaveLength(1);
  });
});

describe('Restaurant [GET (/api/v1/restaurants/:id)] Test suite', () => {
  let response = null;

  beforeAll(async () => {
    /* Runs before all tests */
    response = await request.get('/api/v1/restaurants/1');
  });

  it('Should respond with status code of 200', async () => {
    expect(response.status).toEqual(200);
  });

  it('Should have response body with success true', () => {
    expect(response.body.success).toBeTruthy();
  });

  it('Should have response data of length 1', () => {
    expect(response.body.body).toMatchObject(restaurant);
  });
});

// [/api/v1/auth/restaurants] [SUCCESS]
describe('[POST] [/api/v1/auth/restaurants] Update Restaurant Test suite [SUCCESS]', () => {
  let response = null;

  beforeAll(async () => {
    /* Runs before all tests */
    response = await request.post('/api/v1/auth/register').send({
      firstName: 'lulu',
      lastName: 'martins',
      password: '123456',
      email: 'lulu@gmail.com',
      city: 'New York city',
    });

    const { token } = response.body.body;

    response = await request
      .put('/api/v1/restaurants/1')
      .send({
        name: 'Famous Amadeus PizzaRooo',
        country: 'London',
        city: 'New York City',
        type: 'italian',
        description:
					'This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure.',
      })
      .set('Authorization', token);
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

  it('Should have response body of restaurant object', () => {
    expect(response.body).toHaveProperty('body');
    expect(response.body.body).toMatchObject({
      name: 'Famous Amadeus PizzaRooo',
      country: 'London',
      city: 'New York City',
      type: 'italian',
      description:
				'This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure.',
    });
  });

  it('Should have message body', () => {
    expect(response.body.message).toBe('Restaurant details updated');
  });

  it('Should have response body with success true', () => {
    expect(response.body.success).toBeTruthy();
  });
});

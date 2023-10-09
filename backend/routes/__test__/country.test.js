const request = require('supertest');
const app = require('../server');

describe('Country API', () => {
  it('should fetch data for a given country', async () => {
    const countryName = 'China';
    const response = await request(app).post('/api/country').send({ countryText: countryName });

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toBeDefined();
  });

  it('should return 400 when country name is not provided', async () => {
    const response = await request(app).post('/api/country').send({});

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Country name is required');
  });
});

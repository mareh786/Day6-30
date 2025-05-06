const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should load the index page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Enter your name');
  });
});

describe('POST /greet', () => {
  it('should greet with the provided name', async () => {
    const res = await request(app)
      .post('/greet')
      .send('name=John')
      .set('Content-Type', 'application/x-www-form-urlencoded');

    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hi, Welcome  John!');
  });
});


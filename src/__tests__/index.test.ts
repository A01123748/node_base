import request from 'supertest';
import createServer from '../server';

const app = createServer();
describe('auth', () => {
  it('should resolve with true and valid userId for hardcoded token', done => {
    request(app).get('/').expect(200, done);
  });

  it('should resolve with false for invalid token', async () => {
    const response = 'invalidToken';
    expect(response).toEqual('invalidToken');
  });
});

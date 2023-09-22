import request from 'supertest';
// @ts-ignore
import app from '../../../src/app';

describe('POST /api/upload', () => {
  describe('a successful response', () => {
    let response: request.Response;

    beforeAll(async () => {
      response = await request(app).post('/api/upload').attach('file',  'tests/routes/api/assets/test.jpeg');
      
    });

    it('should have a 200 status code', () => {
      expect(response.statusCode).toBe(200);
    });


    it('should contain the uploaded filename', () => {
      expect(response.text).toContain('test.jpeg');
    });
  });
});

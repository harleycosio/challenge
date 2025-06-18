import Fastify from 'fastify';
import request from 'supertest';

// Create Fastify instance
const fastify = Fastify({
  logger: true, // Enable logger during tests for cleaner output
});

// Test setup
beforeAll(async () => {
  try {
    await fastify.ready();
  } catch (err) {
    console.error('Failed to start Fastify:', err);
    throw err;
  }
});

afterAll(async () => {
  await fastify.close();
});

describe('People Directory Routes', () => {
  test('GET /appWithoutSSRData should return the people directory page', async () => {
    const response = await request(fastify.server)
      .get('/appWithoutSSRData')
      .expect(200);

    expect(response.headers['content-type']).toMatch(/text\/html/);
    expect(response.text).toContain('Welcome to the People Directory');
  });

  test('GET /appWithSSRData should return the people directory page', async () => {
    const response = await request(fastify.server)
      .get('/appWithSSRData')
      .expect(200);

    expect(response.headers['content-type']).toMatch(/text\/html/);
    expect(response.text).toContain('Welcome to the People Directory');
  });
});
const request = require('supertest');
const app = require('../src/index');  // Asegúrate de que esta ruta sea correcta

test('Debe responder con un mensaje de bienvenida', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello, CI/CD Pipeline!');
});

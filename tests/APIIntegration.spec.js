const { test, expect } = require('@playwright/test');
test('GET Request',async({request}) =>
    {
      const response = await request.get('https://jsonplaceholder.typicode.com/users')
      expect(response.ok()).toBeTruthy() // use this syntax for 200 error code
}
);

test.only('POST request - create user', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'John Doe',
      email: 'john@example.com'
    }
  });
   expect(response.status()).toBe(201);
  const responseBody = await response.json();
  expect(responseBody.name).toBe('John Doe');
});
const products = require('./products');

test('should be defined', () => {
  expect(products).toBeDefined()
});

// test('It returns a POST request with a message: Handling POST requests to /products', () => {
//   expect (products.router.post('Handling GET requests to /products')).toBe('Handling GET requests to /products')
// });

test('It returns a GET request', () => {
  expect(products('Handling GET requests to products')).toBe('Handling GET requests to products')
});

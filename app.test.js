const { sum, multiply } = require('./app');
 
test('sum adds numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
 
test('multiply multiplies numbers', () => {
  expect(multiply(3, 4)).toBe(12);
});
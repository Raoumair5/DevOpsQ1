const { add } = require('../src/index');

test('adds 1 + 2 to equal 3', () => {
  expect(add(4, 8)).toBe(3);
});

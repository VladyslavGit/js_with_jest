const { sum } = require("./intro");

test("Sum should return sum of two values", () => {
  expect(sum(1, 3)).toBe(4);
  expect(sum(1, 3)).toEqual(4);
});

test("Sum should return value correctly comparing to other", () => {
  expect(sum(3, 6)).toBeGreaterThan(6);
  expect(sum(3, 6)).toBeGreaterThanOrEqual(9);
  expect(sum(3, 6)).toBeLessThan(10);
  expect(sum(3, 6)).toBeLessThanOrEqual(9);
});

test("Sum should sum two float values correctly", () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

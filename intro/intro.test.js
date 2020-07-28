const { sum, nativeNull } = require("./intro");

describe("Sum function:", () => {
  test("Sum should return sum of two values", () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(1, 3)).toEqual(4);
  });

  test("should return value correctly comparing to other", () => {
    expect(sum(3, 6)).toBeGreaterThan(6);
    expect(sum(3, 6)).toBeGreaterThanOrEqual(9);
    expect(sum(3, 6)).toBeLessThan(10);
    expect(sum(3, 6)).toBeLessThanOrEqual(9);
  });

  test("should sum two float values correctly", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("Native null function:", () => {
  test("should return false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});

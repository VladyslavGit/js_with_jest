const Lodash = require("./sync");

describe("Lodash: compact", () => {
  let _ = new Lodash();
  let array;

  beforeEach(() => {
    array = [false, 33, 0, "", true, null, "hello"];
  });

  afterAll(() => {
    _ = new Lodash();
  });

  test("should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("array should be editable", () => {
    array.push(...["one", "two"]);
    expect(array).toContain("one");
    expect(array).toContain("two");
  });

  test("should remove falsy value from array", () => {
    const result = [33, true, "hello"];
    expect(_.compact(array)).toEqual(result);
  });

  test("should NOT contain falsy values", () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain("");
    expect(_.compact(array)).not.toContain(null);
  });
});

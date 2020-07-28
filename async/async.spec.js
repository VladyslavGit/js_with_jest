const Ajax = require("./async");

describe("Ajax: echo", () => {
  test("should return async value", async () => {
    const result = await Ajax.echo("some data");
    expect(result).toBe("some data");
  });
});

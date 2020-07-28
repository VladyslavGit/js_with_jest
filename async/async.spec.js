const axios = require("axios");
const Ajax = require("./async");

jest.mock("axios");

describe("Ajax: echo", () => {
  test("should return async value", async () => {
    const result = await Ajax.echo("some data");
    expect(result).toBe("some data");
  });

  test("should return async value with promise", () => {
    return Ajax.echo("some data").then((data) => {
      expect(data).toBe("some data");
    });
  });

  test("should catch error with async/await", async () => {
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e.message).toBe("error");
    }
  });

  test("should catch error with promise", () => {
    return Ajax.echo().catch((error) => {
      expect(error).toBeInstanceOf(Error);
    });
  });
});

describe("Ajax: get", () => {
  let responce;
  let todos;

  beforeEach(() => {
    todos = [{ id: 1, title: "Todo 1", completed: false }];

    responce = {
      data: {
        todos,
      },
    };
  });

  test("should return data from backend", () => {
    axios.get.mockReturnValue(responce);

    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});

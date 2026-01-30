import capitalize from "../scripts/capitalize.js";

describe("capitalize test", () => {
  test("is function exist", () => {
    expect(capitalize).not.toBeUndefined();
  });

  test("capitalize a letter", () => {
    expect(capitalize("a")).toBe("A");
    expect(capitalize("c")).toBe("C");
  });

  test("only capitalize the first letter", () => {
    expect(capitalize("time")).toBe("Time");
    expect(capitalize("situation")).toBe("Situation");
  });

  test("throw an type error when non string argument is passed", () => {
    expect(() => capitalize(1231)).toThrow(TypeError);
  });

  test("throw an syntax error when no argument is passed", () => {
    expect(() => capitalize()).toThrow(SyntaxError);
  });
});

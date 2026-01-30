import reverseString from "../scripts/reverse-string";

describe("reverse-string test", () => {
  it("function exists", () => {
    expect(reverseString).toBeDefined();
    expect(typeof reverseString).toBe("function");
  });

  it("return the argument when its' length is 1", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("return reversed string when more than one letter is passed", () => {
    expect(reverseString("ab")).toBe("ba");
    expect(reverseString("abc")).toBe("cba");
    expect(reverseString("abcd")).toBe("dcba");
  });

  it("throw type error when non string or nothing is passed", () => {
    expect(() => reverseString(123)).toThrow(TypeError);
  });
});

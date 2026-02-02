import caesarCipher from "../scripts/caesarCipher.js";

describe("caesar-cipher test", () => {
  it("function exists", () => {
    expect(caesarCipher).toBeDefined();
    expect(typeof caesarCipher).toBe("function");
  });

  it("return original string when no factor is given", () => {
    expect(caesarCipher("abc")).toBe("abc");
    expect(caesarCipher("def")).toBe("def");
  });

  it("lower case shifted", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("abc", 26)).toBe("abc");
    expect(caesarCipher("abc", 52)).toBe("abc");
    expect(caesarCipher("bcd", -1)).toBe("abc");
    expect(caesarCipher("abc", -3)).toBe("xyz");
    expect(caesarCipher("abc", -26)).toBe("abc");
    expect(caesarCipher("abc", -52)).toBe("abc");
  });

  it("upper case shifted", () => {
    expect(caesarCipher("ABC", 1)).toBe("BCD");
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
    expect(caesarCipher("ABC", 26)).toBe("ABC");
    expect(caesarCipher("ABC", 52)).toBe("ABC");
    expect(caesarCipher("BCD", -1)).toBe("ABC");
    expect(caesarCipher("ABC", -3)).toBe("XYZ");
    expect(caesarCipher("ABC", -26)).toBe("ABC");
    expect(caesarCipher("ABC", -52)).toBe("ABC");
  });

  it("mixed case shifted", () => {
    expect(caesarCipher("aBc", 1)).toBe("bCd");
    expect(caesarCipher("xYz", 3)).toBe("aBc");
    expect(caesarCipher("aBc", 26)).toBe("aBc");
    expect(caesarCipher("aBc", 52)).toBe("aBc");
    expect(caesarCipher("bCd", -1)).toBe("aBc");
    expect(caesarCipher("aBc", -3)).toBe("xYz");
    expect(caesarCipher("aBc", -26)).toBe("aBc");
    expect(caesarCipher("aBc", -52)).toBe("aBc");
  });

  it("skip non letter string", () => {
    expect(caesarCipher("a,b,c", 1)).toBe("b,c,d");
    expect(caesarCipher("a, b, c", 1)).toEqual("b, c, d");
    expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
  });

  it("exceptions", () => {
    expect(() => caesarCipher()).toThrow(TypeError);
    expect(() => caesarCipher(null)).toThrow(TypeError);
    expect(() => caesarCipher(NaN)).toThrow(TypeError);
  });
});

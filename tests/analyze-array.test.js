import analyzeArray from "../scripts/analyze-array";

describe("analyze array test", () => {
  let object = null;
  beforeAll(() => {
    object = analyzeArray([1, 8, 3, 4, 2, 6]);
  });

  it("function exists", () => {
    expect(analyzeArray).toBeDefined();
    expect(typeof analyzeArray).toBe("function");
  });

  it("returns object with average", () => {
    expect(object).toHaveProperty("average");
    expect(object).toHaveProperty("average", 4);

    let object2 = analyzeArray([1, 2, 3, 4, 5]);
    expect(object2).toHaveProperty("average", 3);
  });

  it("returns object with min", () => {
    expect(object).toHaveProperty("min");
    expect(object).toHaveProperty("min", 1);

    let object2 = analyzeArray([-5, 4, -3, 2, -1]);
    expect(object2).toHaveProperty("min", -5);
  });

  it("returns object with max", () => {
    expect(object).toHaveProperty("max");
    expect(object).toHaveProperty("max", 8);

    let object2 = analyzeArray([-5, 4, -3, 2, -1]);
    expect(object2).toHaveProperty("max", 4);
  });

  it("returns object with length", () => {
    expect(object).toHaveProperty("length");
    expect(object).toHaveProperty("length", 6);

    let object2 = analyzeArray([-5, 4, -3, 2, -1, 0, 3, 6]);
    expect(object2).toHaveProperty("length", 8);
  });

  it("edge cases", () => {
    expect(analyzeArray([])).toHaveProperty("average", 0);
    expect(analyzeArray([])).toHaveProperty("min", 0);
    expect(analyzeArray([])).toHaveProperty("max", 0);
    expect(analyzeArray([])).toHaveProperty("length", 0);

    expect(() => analyzeArray()).toThrow(TypeError);
    expect(() => analyzeArray([1, 2, "a", 3, 4])).toThrow(TypeError);
    expect(() => analyzeArray([1, 2, NaN, 3, 4])).toThrow(TypeError);
    expect(() => analyzeArray([1, 2, null, 3, 4])).toThrow(TypeError);
  });
});

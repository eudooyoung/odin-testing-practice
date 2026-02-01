import Calculator from "../scripts/calculator.js";

describe("calculator test", () => {
  let calculator;

  beforeAll(() => {
    calculator = new Calculator();
  });

  it("class defined", () => {
    expect(Calculator).toBeDefined();
    expect(calculator).toBeInstanceOf(Calculator);
  });

  it("function add", () => {
    expect(calculator.add).toBeDefined();
    expect(typeof calculator.add).toBe("function");
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.add(-1, -2)).toBe(-3);
    expect(calculator.add(1.1, 1.1)).toBeCloseTo(2.2);
    expect(calculator.add(0, 1)).toBe(1);
    expect(calculator.add(Infinity, 1)).toBe(Infinity);
    expect(calculator.add(-Infinity, 1)).toBe(-Infinity);
    expect(calculator.add(Infinity, -Infinity)).toBe(NaN);
  });

  it("function subtract", () => {
    expect(calculator.subtract).toBeDefined();
    expect(typeof calculator.add).toBe("function");
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.subtract(-3, -2)).toBe(-1);
    expect(calculator.subtract(5.5, 2.2)).toBeCloseTo(3.3);
    expect(calculator.subtract(0, 1)).toBe(-1);
    expect(calculator.subtract(Infinity, 1)).toBe(Infinity);
    expect(calculator.subtract(-Infinity, 1)).toBe(-Infinity);
    expect(calculator.subtract(Infinity, -Infinity)).toBe(Infinity);
  });

  it("function divide", () => {
    expect(calculator.divide).toBeDefined();
    expect(typeof calculator.divide).toBe("function");
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(-4, 2)).toBe(-2);
    expect(calculator.divide(2.1, 3)).toBeCloseTo(0.7);
    expect(calculator.divide(1, 0)).toBe(Infinity);
    expect(calculator.divide(-1, 0)).toBe(-Infinity);
    expect(calculator.divide(1, Infinity)).toBe(0);
    expect(calculator.divide(Infinity, Infinity)).toBeNaN();
    expect(calculator.divide(0, 0)).toBeNaN();
  });

  it("function multiply", () => {
    expect(calculator.multiply).toBeDefined();
    expect(typeof calculator.multiply).toBe("function");
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.multiply(2, -2)).toBe(-4);
    expect(calculator.multiply(2, 2.1)).toBeCloseTo(4.2);
    expect(calculator.multiply(1, 0)).toBe(0);
    expect(calculator.multiply(1, Infinity)).toBe(Infinity);
    expect(calculator.multiply(Infinity, Infinity)).toBe(Infinity);
    expect(calculator.multiply(Infinity, 0)).toBeNaN();
  });

  it("exceptions", () => {
    const methods = Object.keys(calculator);
    methods.forEach((method) => {
      expect(() => calculator[method]("a", "b")).toThrow(TypeError);
      expect(() => calculator[method]("a", 1)).toThrow(TypeError);
      expect(() => calculator[method]()).toThrow(TypeError);
      expect(() => calculator[method]("", "")).toThrow(TypeError);
      expect(() => calculator[method](NaN, NaN)).toThrow(TypeError);
      expect(() => calculator[method](null, null)).toThrow(TypeError);
    });
  });
});

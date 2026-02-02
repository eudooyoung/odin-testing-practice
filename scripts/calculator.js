class Calculator {
  #isValid = (x) => {
    return (typeof x === "number" || typeof x === "bigint") && !Number.isNaN(x);
  };

  add = (x, y) => {
    if (!this.#isValid(x) || !this.#isValid(y)) {
      throw new TypeError("Arguments are explicitly to be number");
    }

    return x + y;
  };

  subtract = (x, y) => {
    if (!this.#isValid(x) || !this.#isValid(y)) {
      throw new TypeError("Arguments are explicitly to be number");
    }

    return x - y;
  };

  divide = (x, y) => {
    if (!this.#isValid(x) || !this.#isValid(y)) {
      throw new TypeError("Arguments are explicitly to be number");
    }

    return x / y;
  };

  multiply = (x, y) => {
    if (!this.#isValid(x) || !this.#isValid(y)) {
      throw new TypeError("Arguments are explicitly to be number");
    }

    if (typeof x !== typeof y) {
      throw new TypeError("Type of arguments should be match each other");
    }

    return x * y;
  };
}

export default Calculator;

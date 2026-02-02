function analyzeArray(arr) {
  let object = { average: 0, min: 0, max: 0, length: 0 };
  if (arr.length === 0) {
    return object;
  }

  arr.forEach((item) => {
    if (typeof item !== "number" || Number.isNaN(item)) {
      throw new TypeError("Array should only contain numbers");
    }
  });

  let sum = arr.reduce((acc, item) => (acc += item), 0);
  let length = arr.length;
  let average = sum / length;

  const arraySorted = arr.sort((a, b) => a - b);
  let min = arraySorted.at(0);
  let max = arraySorted.at(-1);

  object = { average, min, max, length };

  return object;
}

export default analyzeArray;

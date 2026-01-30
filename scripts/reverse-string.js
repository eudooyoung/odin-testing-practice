function reverseString(str) {
  if (str.length === 1) {
    return str;
  }

  const strArr = str.split("");
  for (let i = 0; i < strArr.length / 2; i++) {
    const front = strArr[i];
    const tail = strArr[strArr.length - 1 - i];
    let temp = front;
    strArr[i] = tail;
    strArr[strArr.length - 1 - i] = temp;
  }

  return strArr.join("");
}

export default reverseString;

function caesarCipher(str, shiftFactor = 0) {
  if (str !== 0 && !str) {
    throw new TypeError("First argument should be given");
  }
  
  if (shiftFactor === 0) {
    return str;
  }

  shiftFactor %= 26;
  let shiftedStr = "";

  for (let i = 0; i < str.length; i++) {
    let currentCode = str.charCodeAt(i);
    if (!isLetter(currentCode)) {
      shiftedStr += str.at(i);
      continue;
    }

    let shiftedCode = currentCode + shiftFactor;
    if (isUpperCase(currentCode)) {
      shiftedCode = handleUpperCaseLoop(shiftedCode);
    } else if (isLowerCase(currentCode)) {
      shiftedCode = handleLowerCaseLoop(shiftedCode);
    }
    shiftedStr += String.fromCharCode(shiftedCode);
  }

  return shiftedStr;
}

function handleUpperCaseLoop(charCode) {
  if (charCode < 65) {
    charCode += 26;
  }

  if (charCode > 90) {
    charCode -= 26;
  }

  return charCode;
}

function handleLowerCaseLoop(charCode) {
  if (charCode < 97) {
    charCode += 26;
  }

  if (charCode > 122) {
    charCode -= 26;
  }

  return charCode;
}

function isLetter(charCode) {
  return isUpperCase(charCode) || isLowerCase(charCode);
}

function isUpperCase(charCode) {
  return 65 <= charCode && charCode <= 90;
}

function isLowerCase(charCode) {
  return 97 <= charCode && charCode <= 122;
}

export default caesarCipher;

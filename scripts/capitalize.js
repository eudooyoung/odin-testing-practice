function capitalize(str) {
  if (str !== 0 && !str) {
    throw new SyntaxError("The function needs an argument");
  }

  const firstLetter = str.at(0);
  const rest = str.slice(1);
  
  return firstLetter.toUpperCase() + rest;
}

export default capitalize;

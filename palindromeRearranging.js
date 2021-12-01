function solution(inputString) {
  const charsObj = {};
  for (let i = 0; i < inputString.length; i++) {
    const currChar = inputString[i];
    if (charsObj[currChar]) {
      charsObj[currChar]++;
    } else {
      charsObj[currChar] = 1;
    }
  }
  let numCharsOdd = 0;
  for (const char in charsObj) {
    if (charsObj[char] % 2 === 1) {
      numCharsOdd++;
    }
  }
  if (numCharsOdd > 1) {
    return false;
  }
  return true;
}

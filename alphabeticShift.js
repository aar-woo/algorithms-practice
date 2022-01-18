function solution(inputString) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let shiftedStr = '';
  for (let i = 0; i < inputString.length; i++) {
    const letterIndex = alphabet.indexOf(inputString[i]);
    letterIndex === alphabet.length - 1 ?
      shiftedStr += alphabet[0] :
      shiftedStr += alphabet[letterIndex + 1];
  }
  return shiftedStr;
}

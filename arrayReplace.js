function solution(inputArray, elemToReplace, substitutionElem) {
  let copyArr = inputArray.slice();
  for (let i = 0; i < inputArray.length; i++) {
    if (copyArr[i] === elemToReplace) {
      copyArr.splice(i, 1, substitutionElem);
    }
  }
  return copyArr;
}

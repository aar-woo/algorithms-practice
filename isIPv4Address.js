function solution(inputString) {
  const numArr = inputString.split('.');
  if (numArr.length !== 4) {
    console.log('array length not 4')
    return false;
  }
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === '') {
      return false;
    }
    console.log(numArr[i]);

    if (numArr[i][0] === '0' && numArr[i].length > 1) {
      return false;
    }
    const currNum = Number(numArr[i]);
    if (isNaN(currNum)) {
      return false;
    }
    if (currNum < 0 || currNum > 255) {
      return false;
    }
  }
  return true;
}

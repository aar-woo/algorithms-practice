function solution(n, firstNumber) {
  const incVal = n / 2;
  let radialNum = firstNumber;
  if (firstNumber === n / 2) {
    return 0;
  }
  if (firstNumber > n / 2) {
    for (let i = 0; i < incVal; i++) {
      radialNum === n - 1 ? radialNum = 0 : radialNum++;
    }
  } else {
    radialNum += incVal;
  }
  return radialNum;
}

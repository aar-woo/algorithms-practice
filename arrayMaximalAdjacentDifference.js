function solution(inputArray) {
  let maxDiff = inputArray[0] - inputArray[1];
  if (maxDiff < 0) {
    maxDiff *= -1;
  }
  for (let i = 1; i < inputArray.length - 1; i++) {
    let currDiff;
    currDiff = inputArray[i] - inputArray[i + 1];
    if (currDiff < 0) {
      currDiff *= -1;
    }
    console.log('currDiff', currDiff);

    if (currDiff > maxDiff) {
      maxDiff = currDiff;
    }
  }
  return maxDiff
}

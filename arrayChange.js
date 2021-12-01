function solution(inputArray) {
  let numMoves = 0;
  for (let i = 1; i < inputArray.length; i++) {
    while (inputArray[i] <= inputArray[i - 1]) {
      inputArray[i] += 1;
      numMoves++;
    }
  }
  console.log('inputArray', inputArray);
  return numMoves
}

function solution(inputArray) {
  let avoidsObstacles = false;
  let int = 1;
  while (!avoidsObstacles) {
    avoidsObstacles = true;
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] % int === 0) {
        int++;
        avoidsObstacles = false;
      }
    }
  }
  return int;
}

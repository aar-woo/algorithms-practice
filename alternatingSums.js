//You are given an array of positive integers - the weights of the people.
//Return an array of two integers, where the first element is the total weight of team 1,
//and the second element is the total weight of team 2 after the division is complete.
function solution(a) {
  const sums = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      sums[0] += a[i];
    } else {
      sums[1] += a[i];
    }
  }

  return sums;
}

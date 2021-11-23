function solution(a) {
  const sums = [];
  let aSum = 0;
  let bSum = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      bSum += a[i];
    } else {
      aSum += a[i];
    }
  }
  sums.push(bSum);
  sums.push(aSum);
  return sums;
}

  // create storage for sums
  // create storage for team a sum
  // create storage for team b sum
  // loop thru array
  // if the index is divisible by 2
  // add the element to team b's sum
  // otherwise add the element to team a's sum
  // push team a and team b sums into array of sums

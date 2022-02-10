function solution(deposit, rate, threshold) {
  let numYears = 0;
  let amountInc = deposit * (rate / 100);

  while (deposit < threshold) {
    numYears++;
    deposit += amountInc;
    amountInc = deposit * (rate / 100);
  }
  return numYears;
}

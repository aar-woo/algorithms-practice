function solution(n) {
  const str = n.toString();

  for (let digit = 0; digit < str.length; digit++) {
    const num = parseInt(str[digit]);
    if (num % 2 !== 0) {
      return false
    }
  }
  return true;
}

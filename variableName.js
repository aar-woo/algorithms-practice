function solution(name) {
  const regex = /^[A-Za-z0-9_]*$/;
  const numsRegex = /\d/;
  if (numsRegex.test(name[0])) {
    return false;
  }
  if (regex.test(name)) {
    return true;
  }
  return false;
}

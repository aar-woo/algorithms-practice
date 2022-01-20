function solution(cell1, cell2) {
  const letterStartsDark = 'ACEG';
  const numStartsDark = '1357';
  let cell1IsDark = false;
  let cell2IsDark = false;

  if (letterStartsDark.includes(cell1[0]) && numStartsDark.includes(cell1[1]) || !letterStartsDark.includes(cell1[0]) && !numStartsDark.includes(cell1[1])) {
    cell1IsDark = true;
  }
  if (letterStartsDark.includes(cell2[0]) && numStartsDark.includes(cell2[1]) || !letterStartsDark.includes(cell2[0]) && !numStartsDark.includes(cell2[1])) {
    cell2IsDark = true;
  }

  if (cell1IsDark === cell2IsDark) {
    return true;
  }
  return false;
}

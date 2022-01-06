function solution(image) {
  let rowStart = 0;
  let colStart = 0;
  const maxRowStart = image.length - 2;
  const maxColStart = image[0].length - 2
  const boxAverages = [];
  let currRow = [];
  let currBox = [];

  function boxAverage(box) {
    let sum = 0;
    for (let i = 0; i < box.length; i++) {
      sum += box[i];
    }
    return Math.floor(sum / 9);
  }

  while (rowStart < maxRowStart) {
    for (let row = rowStart; row < rowStart + 3; row++) {
      for (let col = colStart; col < colStart + 3; col++) {
        currBox.push(image[row][col]);
      }
    }
    currRow.push(boxAverage(currBox));
    currBox = [];
    colStart++;
    if (colStart >= maxColStart) {
      colStart = 0;
      boxAverages.push(currRow);
      currRow = [];
      rowStart++;
    }
  }

  return boxAverages;
}

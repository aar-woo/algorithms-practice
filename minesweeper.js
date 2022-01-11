function solution(matrix) {
  const mineMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i].map(x => 0);
    mineMatrix.push(row);
  }

  const minePositions = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col]) { // is true, is a mine
        const mine = {
          row: row,
          col: col
        };
        minePositions.push(mine);
      }
    }
  }

  function findNeighbors(matrix, mine) {
    let viableNeighbors = 'topLeft top topRight bottomLeft bottom bottomRight left right'
    if (mine.row === 0) {
      viableNeighbors = viableNeighbors.replace('topLeft top topRight', '');
    }
    if (mine.row === matrix.length - 1) {
      viableNeighbors = viableNeighbors.replace('bottomLeft bottom bottomRight', '');
    }
    if (mine.col === 0) {
      viableNeighbors = viableNeighbors.replace('left', '').replace('topLeft', '').replace('bottomLeft', '');
    }
    if (mine.col === matrix[0].length - 1) {
      viableNeighbors = viableNeighbors.replace('right', '').replace('topRight', '').replace('bottomRight', '');
    }
    return viableNeighbors;
  }

  for (let i = 0; i < minePositions.length; i++) {
    const row = minePositions[i].row;
    const col = minePositions[i].col;
    const viableNeighbors = findNeighbors(matrix, minePositions[i]); // string of all viable neighbors

    if (viableNeighbors.includes('topLeft')) {
      mineMatrix[row - 1][col - 1]++;
    } if (viableNeighbors.includes('top')) {
      mineMatrix[row - 1][col]++;
    } if (viableNeighbors.includes('topRight')) {
      mineMatrix[row - 1][col + 1]++;
    } if (viableNeighbors.includes('left')) {
      mineMatrix[row][col - 1]++;
    } if (viableNeighbors.includes('right')) {
      mineMatrix[row][col + 1]++;
    } if (viableNeighbors.includes('bottom')) {
      mineMatrix[row + 1][col]++;
    } if (viableNeighbors.includes('bottomLeft')) {
      mineMatrix[row + 1][col - 1]++;
    } if (viableNeighbors.includes('bottomRight')) {
      mineMatrix[row + 1][col + 1]++;
    }
  }

  return mineMatrix

}

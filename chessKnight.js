function solution(cell) {
    const letterStr = 'abcdefgh'; // length 8
    const numberStr = '12345678';
    let count = 0;
    const knightLetterIndex = letterStr.indexOf(cell[0]);
    const knightNumberIndex = numberStr.indexOf(cell[1]);
    console.log('letter index', knightLetterIndex);
    console.log('number index', knightNumberIndex);
    function inRangeZeroToSeven(num) {
        if (num >= 0 && num <= 7) {
            return true;
        }
        return false;
    }

    if (inRangeZeroToSeven(knightNumberIndex + 2)){
        if (inRangeZeroToSeven(knightLetterIndex + 1)) {
            count++;
        }
        if (inRangeZeroToSeven(knightLetterIndex - 1)) {
            count++;
        }
    }
    if (inRangeZeroToSeven(knightNumberIndex - 2)) {
        if (inRangeZeroToSeven(knightLetterIndex + 1)) {
            count++;
        }
        if (inRangeZeroToSeven(knightLetterIndex - 1)) {
            count++;
        }
    }
    if (inRangeZeroToSeven(knightLetterIndex + 2)) {
        if (inRangeZeroToSeven(knightNumberIndex + 1)) {
            count++;
        }
        if (inRangeZeroToSeven(knightNumberIndex - 1)) {
            count++;
        }
    }
    if (inRangeZeroToSeven(knightLetterIndex - 2)) {
        if (inRangeZeroToSeven(knightNumberIndex + 1)) {
            count++;
        }
        if (inRangeZeroToSeven(knightNumberIndex - 1)) {
            count++;
        }
    }
    
    return count
}

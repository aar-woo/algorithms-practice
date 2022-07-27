function solution(bishop, pawn) {    
    const possiblePositions = [];
    const lettersStr = 'abcdefgh';
    const numbersStr = '12345678';

    const bishopLetterIndex = lettersStr.indexOf(bishop[0]) // ('d4', letterIndex = 3, 
    const bishopNumberIndex =  numbersStr.indexOf(bishop[1]); //bishopNumberIndex = 3

    let currNumIndexUp = bishopNumberIndex + 1; // starts at index 4
    let currNumIndexDown = bishopNumberIndex - 1; // starts at index 2
    

    for (let i = bishopLetterIndex + 1; i < lettersStr.length; i++) {
        if (currNumIndexUp < numbersStr.length) {
            const possiblePosUp = lettersStr[i] + numbersStr[currNumIndexUp];
            possiblePositions.push(possiblePosUp);
            currNumIndexUp++;
        } 
        if (currNumIndexDown > 0) {
            const possiblePosDown = lettersStr[i] + numbersStr[currNumIndexDown]
            possiblePositions.push(possiblePosDown);
            currNumIndexDown--;
        }
    } 
    
    currNumIndexUp = bishopNumberIndex + 1; 
    currNumIndexDown = bishopNumberIndex - 1;
    for (let i = bishopLetterIndex - 1; i >= 0; i--) {
        if (currNumIndexUp < numbersStr.length) {
            const possiblePosUp = lettersStr[i] + numbersStr[currNumIndexUp];
            possiblePositions.push(possiblePosUp);
            currNumIndexUp++;
        } 
        if (currNumIndexDown > 0) {
            const possiblePosDown = lettersStr[i] + numbersStr[currNumIndexDown]
            possiblePositions.push(possiblePosDown);
            currNumIndexDown--;
        }
    }    
    if (possiblePositions.includes(pawn)) {
        return true;
    }
    return false

}

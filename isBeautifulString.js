function solution(inputString) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let greatestIndex = 0;
    const lettersObj = {};
    for (let i = 0; i < inputString.length; i++) {
        const currChar = inputString[i];
        if (lettersObj[currChar]) {
            lettersObj[currChar]++;
        } else {
            lettersObj[currChar] = 1;
        }
        if (alphabet.indexOf(currChar) > greatestIndex) {
            greatestIndex = alphabet.indexOf(currChar);
        }
    }
    const lettersObjProps = Object.keys(lettersObj);
    if (lettersObjProps.length !== greatestIndex + 1) {
        return false;
    }
    const uniqLettersOrdered = lettersObjProps.sort((a, b) => {
        if (alphabet.indexOf(a) < alphabet.indexOf(b)) {
            return -1
        } 
        if (alphabet.indexOf(a) > alphabet.indexOf(b)) {
            return 1;
        }
        return 0;
    })


    let currLetterIndex = greatestIndex;
    for (let i = uniqLettersOrdered.length - 1; i > 0; i--) {
        const currLetterVal = lettersObj[uniqLettersOrdered[i]];
        const prevLetterVal = lettersObj[uniqLettersOrdered[i - 1]];
        console.log('currval', currLetterVal);
        console.log('preval', prevLetterVal);
        if (prevLetterVal < currLetterVal) {
            return false;
        }
    }
    return true;

}

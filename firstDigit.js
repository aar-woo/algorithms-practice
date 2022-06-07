function solution(inputString) {
            
    for (let i = 0; i < inputString.length; i++) {
        const charToNum = parseInt(inputString[i]);
        if (!isNaN(charToNum) && charToNum !== " ") {
            return inputString[i];
        }
    }
    
}

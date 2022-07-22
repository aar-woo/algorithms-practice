function solution(inputString) {
    let longestPrefix = '';
    for (let i = 0; i < inputString.length; i++) {
        const currElement = inputString[i];
        if (!parseInt(currElement) && parseInt(currElement) !== 0) {
            return longestPrefix;
        }
        longestPrefix += currElement;
    }
    return longestPrefix;
}

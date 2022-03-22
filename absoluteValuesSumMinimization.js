function solution(a) {    
    let lowestSum;
    let closestElem;
    for (let i = 0; i< a.length; i++) {
        let currSum = 0;
        const currNum = a[i];
        for (let j = 0; j < a.length; j++) {
            const absDiff = Math.abs(currNum - a[j]);
            currSum += absDiff;
        }
        console.log(currSum);
        if (currSum < lowestSum || (currSum === lowestSum && currNum < closestElem) || i === 0) {
            lowestSum = currSum;
            closestElem = currNum;
        }
    }
    return closestElem;
}

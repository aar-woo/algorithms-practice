function solution(n, degree) {
    degree = degree || 0;

    if (n.toString().length === 1) {
        return degree;
    }
    
    const numStr = n.toString();
    const numsArr = [];
    let currSum = 0;
    
    for (let i = 0; i < numStr.length; i++) {
        const currNum = numStr[i];
        currSum += parseInt(currNum);
    }
   degree++;
    
    if (currSum.toString().length === 1) {
        return degree;
    } else {
        return solution(currSum, degree);
    }
}


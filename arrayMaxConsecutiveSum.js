function solution(inputArray, k) { 
    let maxSum = 0;
    
    for (let i = 0; i <= inputArray.length - k; i++) {
        let currSum = 0;
        for (let j = i; j < (i + k); j++) {
            currSum += inputArray[j];
            if (currSum > maxSum) {
                maxSum = currSum;
            }
        }
    }
    
    return maxSum;        
}

function solution(inputArray, k) {
    const filteredArr = [];
    let nextRemove = k;
    for (let i = 0; i < inputArray.length; i++) {
        if ((i + 1) === nextRemove) {
            nextRemove += k;
        } else {
            filteredArr.push(inputArray[i])
        }
    }
    
    return filteredArr
            
   
}

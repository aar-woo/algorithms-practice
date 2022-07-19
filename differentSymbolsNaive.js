function solution(s) {
    let uniqCount = 0;
    const lettersArr = [];
    
    for (let i = 0; i < s.length; i++) {
        const currLetter = s[i];
        if (lettersArr.includes(currLetter)) {
            continue;
        }
        uniqCount++;
        lettersArr.push(currLetter);
    }
    
    return uniqCount;
}

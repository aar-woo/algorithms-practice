var gcdOfStrings = function(str1, str2) {
    let smallerStr = '';
    let toSplitStr = '';
    if (str1.length < str2.length) {
        smallerStr = str1;
        toSplitStr = str2;
    } else {
        smallerStr = str2;
        toSplitStr = str1;
    }
    
    let gcdStr = '';
    let currStr = '';
    const possibleGCDs = [];
    for (let i = 0; i < smallerStr.length; i++) {
        const currLetter = smallerStr[i];
        currStr += currLetter;
        if (!toSplitStr.includes(currStr)) {
            return '';
        }
        if (toSplitStr.includes(currStr)) {
            gcdStr += currLetter;
            
            if (toSplitStr.length % gcdStr.length === 0 && smallerStr.length % gcdStr.length === 0) {
                const strArr = [];
                let splitStr = '';
                for (let j = 0; j < toSplitStr.length; j++) {
                    splitStr += toSplitStr[j];
                    if (splitStr.length === gcdStr.length) {
                        strArr.push(splitStr);
                        splitStr = '';
                    }
                }
                
                let isGCD = true;
                for (let strIndex = 0; strIndex < strArr.length; strIndex++) {
                    if (strArr[strIndex] !== gcdStr) {
                        isGCD = false;
                    }
                }
                if (isGCD) {
                    possibleGCDs.push(gcdStr);
                }
                
            }  
        }
    }
    
    if (possibleGCDs.length > 0) {
        return possibleGCDs[possibleGCDs.length - 1];
    }
    return '';
};
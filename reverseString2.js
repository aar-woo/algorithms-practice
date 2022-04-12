/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    const substringsArr = [];
    let currStr = '';
    for (let i = 0; i < s.length; i++) {
        currStr += s[i];
        if (currStr.length === 2 * k) {
            substringsArr.push(currStr);
            currStr = '';
        } else if (i === s.length - 1) {
            substringsArr.push(currStr);
        }
    }
    
    let reversedStr = '';
    for (let i = 0; i < substringsArr.length; i++) {
        let currSubstring = substringsArr[i];
        let reversedSubstring = '';
        if (currSubstring.length < k) {
            for (let letter = currSubstring.length - 1; letter >= 0; letter--) {
                reversedSubstring += currSubstring[letter];
            }
      
            reversedStr += reversedSubstring;
        } else {
            for (let letter = k - 1; letter >= 0; letter--) {
                reversedStr += currSubstring[letter];
            }
            for (let j = k; j < currSubstring.length; j++) {
                reversedStr += currSubstring[j];
            }
        }
    }
    return reversedStr;
};
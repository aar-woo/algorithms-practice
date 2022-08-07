function solution(st) {
    function isPalindrome(str) {
        let reverseStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reverseStr += str[i];
        }
        if (reverseStr === str) {
            return true;
        }
        return false;
    }

    let substringPalindrome = ''
    for (let i = 0; i < st.length - 1; i++) {
        const currSubstring = st.substring(i);
        if (isPalindrome(currSubstring)) {
            substringPalindrome = currSubstring;
            break;
        }
    }

    let shortestPalindrome = st;
    
    if (substringPalindrome !== '') {
        const palindromeStart = st.indexOf(substringPalindrome);
        for (let i = palindromeStart - 1; i >= 0; i--) {
            shortestPalindrome += st[i];
        }
    } else if (st[st.length - 1] !== st[st.length - 3]) {
        for (let i = st.length - 2; i >= 0; i--) {
            shortestPalindrome += st[i];
        }
    } else {
        for (let i = st.length - 1; i >= 0; i--) {
            shortestPalindrome += st[i];
        }
    }
    
    return shortestPalindrome;
}

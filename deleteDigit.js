function solution(n) {
       let maxVal;
       const numString = n.toString();
       for (let i = 0; i < numString.length; i++) {
           const copyNumString = numString.slice();
           const splicedNumString = copyNumString.slice(0, i) + copyNumString.slice(i + 1, numString.length);
           const parsedInt = parseInt(splicedNumString);
           if (parsedInt > maxVal || maxVal === undefined) {
               maxVal = parsedInt;
           }
       }
       return maxVal
   }
   
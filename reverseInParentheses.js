function solution(inputString) {
  // create storage for output
  // create storage for strToReverse
  // loop thru inputString
  // if element is a '('
  // add element to output
  // set strToReverse = inputString.substring(i + 1, indexOf(')') + 1)
  // loop thru strToReverse in reverse
  // add element to output
  // set i = indexOf(')') + 1;
  // otherwise
  // add element to output
  // return output
  let newStr = '';
  let strToReverse;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '(') {
      let endParentheses = inputString.indexOf(')', i);
      strToReverse = inputString.substring(i + 1, endParentheses);
      for (let j = strToReverse.length - 1; j >= 0; j--) {
        newStr += strToReverse[j];
      }
      i = endParentheses;
    } else {
      newStr += inputString[i];
    }
  }
  return newStr;



  let newStr = '';
  let strToReverse;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '(') {
      let endParentheses = inputString.indexOf(')', i);
      strToReverse = inputString.substring(i + 1, endParentheses);
      for (let j = strToReverse.length - 1; j >= 0; j--) {
        newStr += strToReverse[j];
      }
      i = endParentheses;
    } else {
      newStr += inputString[i];
    }
  }
  return newStr;
}
function solution(inputString) {
  const betweenParensRegex = /\(([^)]+)\)+/g;
  let matches = inputString.match(betweenParensRegex);
  //    const matches = [...inputString.matchAll(betweenParensRegex)].flat();

  const reversedStrings = [];
  //    console.log('matches', matches)

  if (!matches) {
    matches = ['']
  }
  let currWord = '';
  for (let i = 0; i < matches.length; i++) {
    for (let j = matches[i].length - 2; j > 0; j--) {
      currWord += matches[i][j];
    }
    reversedStrings.push(currWord);
    currWord = '';
  }
  //    console.log('reversedStrings', reversedStrings);

  let innerStr = ''
  for (let i = 0; i < reversedStrings.length; i++) {
    if (reversedStrings[i].includes(')')) {
      let innerOpeningParens = reversedStrings[i].indexOf(')');
      let innerClosingParens = reversedStrings[i].indexOf('(');
      innerStr = reversedStrings[i].substring(innerOpeningParens + 1, innerClosingParens);
      reversedStrings[i] = reversedStrings[i].replace(`)${innerStr}(`, innerStr.split('').reverse().join(''));
    }
  }
  //    console.log('reversedStrings after ', reversedStrings);

  let newStr = inputString;
  for (let i = 0; i < matches.length; i++) {
    newStr = newStr.replace(matches[i], reversedStrings[i]);
  }
  return newStr;

}




// function solution(inputString) { // does not account for multiple seperate parenthesis
  // create storage for strBeforeParens
  // create storage for strAfterParens
  // create storage for openingParens
  // create storage for closingParens
  // create storage for strBetweenParens

  // loop through inputString
  // if char at i is equal to '(', openingParens = i, break (stop loop)
  // else add char at i to strBeforeParens

  // loop through the input string in reverse
  // if char at j equal to ')', closingParens = i, break
  // loop through input string from openingParens + 1
  // if index > closingParens
  // add char to strAfterParens
  // if index === closingParens
  // continue
  // else add char to strBetweenParens

    // if strBetweenParens includes '('
  // create storage for innerStr
  // create storage for innerReversed
  // let innerOpeningParens = indexOf('(')
  // let innerClosingParens = indexOf(')')
  // let innerStr = strBetweenParens.substring(innerOpeningParens + 1, innerClosingParens)
  // loop through innerStr in reverse
  // add char to innerReversed
  // strBetweenParens replace '(innerStr)' with innerReversed

  // create storage for reversedStr
  // loop thru strBetweenParens in reverse
  // add char to reversedStr
  // concat strBeforeParens + reversedStr + strAfterParens

//   let strBeforeParens = '';
//   let strAfterParens = '';
//   let strBetweenParens = '';
//   let openingParens;
//   let closingParens;
//   for (let i = 0; i < inputString.length; i++) {
//     if (inputString[i] === '(') {
//       openingParens = i;
//       break;
//     } else {
//       strBeforeParens += inputString[i];
//     }
//   }
//   for (let i = inputString.length - 1; i >= 0; i--) {
//     if (inputString[i] === ')') {
//       closingParens = i;
//       break;
//     }
//   }
//   for (let i = openingParens + 1; i < inputString.length; i++) {
//     if (i > closingParens) {
//       strAfterParens += inputString[i]
//     } else if (i === closingParens) {
//       continue;
//     } else {
//       strBetweenParens += inputString[i];
//     }
//   }
//   let replacedStrBetween;
//   let innerStr;
//   let innerReversed = '';
//   let reversedStrBetween = '';
//   if (strBetweenParens.includes('(')) {
//     const innerOpeningParens = strBetweenParens.indexOf('(');
//     const innerClosingParens = strBetweenParens.indexOf(')');
//     innerStr = strBetweenParens.substring(innerOpeningParens + 1, innerClosingParens);
//     for (let i = innerStr.length - 1; i >= 0; i--) {
//       innerReversed += innerStr[i];
//     }
//     replacedStrBetween = strBetweenParens.replace(`(${innerStr})`, innerReversed)
//     for (let j = replacedStrBetween.length - 1; j >= 0; j--) {
//       reversedStrBetween += replacedStrBetween[j];
//     }
//   } else {
//     for (let i = strBetweenParens.length - 1; i >= 0; i--) {
//       reversedStrBetween += strBetweenParens[i];
//     }
//   }

//   return (strBeforeParens + reversedStrBetween + strAfterParens);




// }

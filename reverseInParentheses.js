//Write a function that reverses characters in (possibly nested) parentheses in the input string.

function solution(inputString) {
  let newString = inputString
  while (newString.includes('(')) {
    let closingParens = newString.indexOf(')');
    let openingParens = newString.lastIndexOf('(', closingParens) // works backwords from closing ind
    let innerStr = newString.substring(openingParens + 1, closingParens);
    let reverseStr = innerStr.split('').reverse().join('');
    newString = newString.replace(`(${innerStr})`, reverseStr);
  }
  return newString;
}

  // while string includes ('(')
  // find innermost parens
  // first indexOf closing parens ')'
  // last index of opening parens '('  starting from the closing parens
  // create substring between parens
  // reverse substring
  // replace original substring with reversed substring

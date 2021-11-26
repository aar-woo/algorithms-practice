//Find Words That Can Be Formed by Characters

var countCharacters = function (words, chars) {
  const wordsFormed = [];
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let charsCopy = chars.slice();
    let canBeFormed = true;
    for (let j = 0; j < words[i].length; j++) {
      const word = words[i];
      const letterIndex = charsCopy.indexOf(word[j])

      if (letterIndex === -1) {
        canBeFormed = false;
      } else {
        if (letterIndex === 0) {
          charsCopy = charsCopy.substring(1)
        } else {
          charsCopy = charsCopy.substring(0, letterIndex) + charsCopy.substring(letterIndex + 1, charsCopy.length)
        }
      }
    }
    if (canBeFormed) {
      count += words[i].length;
    }
  }
  return count;
};

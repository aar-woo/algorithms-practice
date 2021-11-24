function solution(a, b) {
  const aObjs = [];
  const bObjs = [];
  for (let i = 0; i < a.length; i++) {
    aObjs.push({
      num: a[i],
      index: i
    })
    bObjs.push({
      num: b[i],
      index: i
    })
  }
  let allEqual = true;
  for (let i = 0; i < aObjs.length; i++) {
    if (aObjs[i].num !== bObjs[i].num) {
      allEqual = false;
    }
  }
  if (allEqual) {
    return true;
  }

  let aElem;
  let bElem;
  let aMatchIndex;
  for (let i = 0; i < aObjs.length; i++) {
    aElem = aObjs[i];
    for (let j = 0; j < bObjs.length; j++) {
      bElem = bObjs[j]
      if (bElem.num === aElem.num && bElem.index !== aElem.index) {
        aMatchIndex = aObjs[j];
      }
    }
    if (!aMatchIndex) {
      continue;
    }
    for (let k = 0; k < bObjs.length; k++) {
      if (bObjs[k].num === aMatchIndex.num && bObjs[k].index === aElem.index) {
        let allOtherEqual = true;
        for (let i = 0; i < aObjs.length; i++) {
          if (i === aElem.index || i === aMatchIndex.index) {
            continue;
          }
          if (aObjs[i].num !== bObjs[i].num) {
            allOtherEqual = false;
          }
        }
        if (allOtherEqual) {
          return true;
        }
      }
    }
    return false;
  }
}

    // compare arrays that have the same numbers as well as instances of each number
    // otherwise, return false, since there is no way to obtain an array of different numbers

    // create an object for each array
    // loop thru each array
        // add a property to the object for each unique number in the array
        // if the property exists in the array, increment its count
    // compare each property in the objects
    // if a property's value is different then return false
    // otherwise, compare the arrays

    // loop thru each array
        // create an object for each element
        // add properties for the element's number and index

    // loop thru the array of objects for a, index i
        // const element = a[0]  num = 1.   index = 0
        // loop thru array of objects for b, index j
            // if b[j].num === a[0].num = 1         -checking array b where the number is the same
                // get a[j].num = 3                 -getting the element at the index, number is the same^
        // loop thru array of objects for b, index k
            // if b[k].num === a[j].num && b[k].index === a[0].index    -if the
                // return true


    // guard for same index and same number swap
    // gaurd for arrays of differing number instances

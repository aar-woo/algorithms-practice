function solution(a, b) {
    const indicesToSwap = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        indicesToSwap.push(i);
      }
    }

    if (indicesToSwap.length === 0) {
      return true;
    }
    if (indicesToSwap.length > 2) {
      return false
    }

    const aCopy = a.slice();
    const aFirstSwap = a[indicesToSwap[0]];
    aCopy[indicesToSwap[0]] = a[indicesToSwap[1]];
    aCopy[indicesToSwap[1]] = a[indicesToSwap[0]];
    console.log('aCopy', aCopy);
    console.log('b', b);
    for (let i = 0; i < aCopy.length; i++) {
      if (aCopy[i] !== b[i]) {
        return false
      }
    }
    return true;
}

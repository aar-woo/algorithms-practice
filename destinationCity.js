var destCity = function (paths) {
  for (let i = 0; i < paths.length; i++) {
    let isDestination = true;
    const currCity = paths[i][1];
    for (let j = 0; j < paths.length; j++) {
      if ((paths[j][1] === currCity || paths[j][0] === currCity) && j !== i) {
        isDestination = false;
      }
    }
    if (isDestination === true) {
      return currCity;
    }
  }
};

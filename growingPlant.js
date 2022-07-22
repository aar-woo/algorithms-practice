function solution(upSpeed, downSpeed, desiredHeight) {
    let height = 0;
    let numDaysPassed = 0;
    while (height < desiredHeight) {
        height += upSpeed;
        numDaysPassed++;
        if (height >= desiredHeight) {
            return numDaysPassed;
        }
        height -= downSpeed;
    }
}

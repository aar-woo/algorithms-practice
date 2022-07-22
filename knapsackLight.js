function solution(value1, weight1, value2, weight2, maxW) {
    const sumWeight = weight1 + weight2;
    if (sumWeight <= maxW) {
        return value1 + value2;
    }
    if (weight1 > maxW || weight2 > maxW) {
        if (weight1 < weight2 && weight1 <= maxW) {
            return value1;
        }
        if (weight2 < weight1 && weight2 <= maxW){
            return value2;
        }
        if (weight1 > maxW && weight2 > maxW) {
            return 0;
        }
    }
    if (sumWeight > maxW) {
        if (value1 > value2) {
            return value1;
        }
        return value2;
    }
}

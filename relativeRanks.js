/**
 * 
 * Relative ranks algorithm problem - leetcode
 */
var findRelativeRanks = function(score) {
    let rankedArr = [];
    const ranksObjArr = [];
    for (let i = 0; i < score.length; i++) {
        rankedArr.push('');
        ranksObjArr.push({
            index: i,
            value: score[i]
        });
    }
    
    const sortedArr = score.sort((a,b) => a > b ? -1 : 1);
 
    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 0; j < ranksObjArr.length; j++) {
            if (i === 0 && ranksObjArr[j].value === sortedArr[i]) {
                ranksObjArr[j].rank = 'Gold Medal';
            } else if (i === 1 && ranksObjArr[j].value === sortedArr[i]) {
                ranksObjArr[j].rank = 'Silver Medal';
            } else if (i === 2 && ranksObjArr[j].value === sortedArr[i]) {
                ranksObjArr[j].rank = 'Bronze Medal';
            } else if (ranksObjArr[j].value === sortedArr[i]) {
                ranksObjArr[j].rank = (i + 1).toString();
            }
        }
    }
    
    for (let i = 0; i < ranksObjArr.length; i++) {
        rankedArr[ranksObjArr[i].index] = ranksObjArr[i].rank;
    }
    console.log('ranked', rankedArr)
    return rankedArr;
    
};
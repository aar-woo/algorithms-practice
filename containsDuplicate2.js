var containsNearbyDuplicate = function(nums, k) {
    const uniqueNums = {}
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        if (uniqueNums.hasOwnProperty(currNum)) {
            uniqueNums[currNum].push(i);
        } else {
            uniqueNums[currNum] = [i];
        }
    }
    
    for (const uniqueNum in uniqueNums) {
        if (uniqueNums[uniqueNum].length > 1) {
            const uniqueIndices = uniqueNums[uniqueNum];

            for (let i = 0; i < uniqueIndices.length; i++) {
                if (Math.abs(uniqueIndices[i] - uniqueIndices[i + 1]) <= k) {
                    return true;
                }
            }
        }
    }

    return false;
};
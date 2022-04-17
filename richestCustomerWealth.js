var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let acc = 0; acc < accounts.length; acc++) {
        const currAccount = accounts[acc];
        let currAccountSum = 0;
        for (let i = 0; i < currAccount.length; i++) {
            currAccountSum += currAccount[i];
        }
        if (currAccountSum > maxWealth) {
            maxWealth = currAccountSum;
        }
    }
    return maxWealth;
};
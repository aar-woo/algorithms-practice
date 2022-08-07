function solution(votes, k) {
    let greatestVotes = Math.max(...votes);
    let numPossibleWinners = 0;
    let copyVotes = votes.slice();
    copyVotes.splice(votes.indexOf(greatestVotes), 1);

    if (k === 0 && !copyVotes.includes(greatestVotes)) {
        console.log('isunique')
        return 1;
    }
    for (let i = 0; i < votes.length; i++) {
        let currentVote = votes[i];
        currentVote += k;
        if (currentVote > greatestVotes) {
            numPossibleWinners++;
        }
    }
    return numPossibleWinners
}
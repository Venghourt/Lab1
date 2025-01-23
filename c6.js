function countVote(vote) {
    let A = 0;
    let B = 0;
    let C = 0;
    for (let i = 0; i < vote.length; i++) {
        if (vote[i] === 'A') {
            A++;
        } else if (vote[i] === 'B') {
            B++;
        } else if (vote[i] === 'C') {
            C++;
        }
    }
    let highest = Math.max(A, B, C);
    if (highest === A) {
        return "A is the winner!";
    } else if (highest === B) {
        return "B is the winner!";
    } else if (highest === C) {
        return "C is the winner!";
    }
}
let vote = ['A', 'B', 'A', 'C', 'A'];
console.log(countVote(vote));
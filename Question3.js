function Coinchange(testCases) {
    const results = [];

    for (let t = 0; t < testCases.length; t++) {
        const { n, target, coins } = testCases[t];
        const dp = Array(target + 1).fill(0);

        dp[0] = 1;

        for (let coin of coins) {
            for (let amount = coin; amount <= target; amount++) {
                dp[amount] += dp[amount - coin];
            }
        }

        results.push(dp[target]);
    }

    return results;
}

function parseInput(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0], 10); 
    const testCases = [];
    let index = 1;

    for (let t = 0; t < T; t++) {
        const [n, target] = lines[index++].split(' ').map(Number);
        const coins = lines[index++].split(' ').map(Number);
        testCases.push({ n, target, coins });
    }

    return testCases;
}

const input = `
3
3 13
5 2 4
3 28
2 5 4
4 28
1 2 4 5
`;

const testCases = parseInput(input);

const results = Coinchange(testCases);

results.forEach(result => console.log(result));

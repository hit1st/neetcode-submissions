class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let highestProfit = 0;
        let lowest = prices[0];

        for (let i = 1; i < prices.length; i += 1) {
            if (prices[i] < lowest) lowest = prices[i];
            if (prices[i] > lowest) highestProfit = Math.max(highestProfit, prices[i] - lowest);
        }
        return highestProfit;
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let highestProfit = 0
        let l = 0;
        let r = 1;

        while (r < prices.length) {
            if (prices[r] > prices[l]) {
                highestProfit = Math.max(highestProfit, prices[r] - prices[l])
            } else {
                l = r
            }
            r += 1;
        }
        return highestProfit;
    }
}

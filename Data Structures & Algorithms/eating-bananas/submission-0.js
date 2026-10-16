class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const rate = Math.floor(h / piles.length);
        const stack = [];

        for (let i = 0; i < piles.length; i += 1) {
            const currRate = piles[i] / rate;
            if (stack.length > 0 && currRate < stack[stack.length - 1]) continue;
            else stack.push(currRate);
        }

        return stack.pop();
    }
}

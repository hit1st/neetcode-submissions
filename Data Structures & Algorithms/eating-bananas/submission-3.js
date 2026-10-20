class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let k = r;

        while (l <= r) {
            const rate = Math.floor((l + r) / 2);
            const total = piles.reduce((acc, p) => acc + Math.ceil(p / rate), 0);

            if (total <= h) {
                k = rate;
                r = rate - 1;
            } else {
                l = rate + 1;
            }
        }

        return k;
    }
}

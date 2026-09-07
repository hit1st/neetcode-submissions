class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = [...nums].sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < sorted.length - 2; i += 1) {
            let l = i + 1;
            let r = sorted.length - 1;
            while (l < r) {
                const sum = sorted[i] + sorted[l] + sorted[r];
                if (sum === 0) {
                    res.push([sorted[i], sorted[l], sorted[r]]);
                    l += 1;
                    r -= 1;
                    while (sorted[l] === sorted[l - 1]) l += 1;
                    while (sorted[r] === sorted[r + 1]) r -= 1;
                }
                if (sum < 0) l += 1;
                else r -= 1;
            }
        }

        return res;
    }
}

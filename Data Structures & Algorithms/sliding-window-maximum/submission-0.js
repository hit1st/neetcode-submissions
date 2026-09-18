class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (nums.length < k) return Math.max(...nums);
        // brute force
        const res = [];

        for (let i = k; i <= nums.length; i += 1) {
            res.push(Math.max(...nums.slice(i - k, i)));
        }
        return res;
    }
}

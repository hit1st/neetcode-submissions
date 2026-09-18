class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (nums.length < k) return Math.max(...nums);

        const res = [];
        let l = 0;
        let windowMax = 0;

        for (let r = 0; r < nums.length; r += 1) {
            if (k === 1 && r >= k) res.push(nums[r]);
            if (r < k) windowMax = Math.max(windowMax, nums[r]);
            if (r === k - 1) res.push(windowMax);
            if (r >= k) {
                if (nums[l] <= nums[r]) windowMax = Math.max(windowMax, nums[r]);
                res.push(windowMax);
                l += 1;
            }
        }
        return res;
    }
}

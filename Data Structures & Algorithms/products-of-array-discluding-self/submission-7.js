class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [];
        const suffix = [];

        prefix[0] = 1;
        for (let i = 0; i < nums.length - 1; i += 1) {
            prefix[i + 1] = prefix[i] * nums[i];
        }

        suffix[nums.length - 1] = 1;
        for (let i = nums.length - 1; i > 0; i -= 1) {
            suffix[i - 1] = suffix[i] * nums[i];
        }

        const res = [];
        for (let i = 0; i < nums.length; i += 1) {
            res[i] = prefix[i] * suffix[i];
        }

        return res;
    }
}
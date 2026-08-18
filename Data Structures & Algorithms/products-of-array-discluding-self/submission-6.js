class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [];
        const suffix = [];
        const output = [];

        prefix[0] = 1;
        suffix[nums.length - 1] = 1;

        for (let i = 1; i < nums.length; i += 1) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i -= 1) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }

        for (let i = 0; i < nums.length; i += 1) {
            output[i] = prefix[i] * suffix[i];
        }
        return output;
    }
}
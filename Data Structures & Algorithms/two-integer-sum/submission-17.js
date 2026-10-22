class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();

        for (let i = 0; i < nums.length; i += 1) {
            const diff = target - nums[i];
            if (seen.has(diff)) return [seen.get(diff), i];
            seen.set(nums[i], i);
        }
    }
}

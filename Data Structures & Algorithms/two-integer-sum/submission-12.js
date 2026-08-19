class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i += 1) {
            const diff = target - nums[i];

            if (map.has(diff)) return [Math.min(map.get(diff), i), Math.max(map.get(diff), i)];
            map.set(nums[i], i);
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map();

        for (let i = 0; i < nums.length; i += 1) {
            const diff = target - nums[i];

            if (hashMap.has(diff)) return [Math.min(hashMap.get(diff), i), Math.max(hashMap.get(diff), i)];
            hashMap.set(nums[i], i);
        }

        return [];
    }
}

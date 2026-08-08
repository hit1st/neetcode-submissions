class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {};

        for (let i = 0; i < nums.length; i += 1) {
            const diff = target - nums[i];
            if (diff in hashMap) return [hashMap[diff], i];
            hashMap[nums[i]] = i;
        }
        
        return [];
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map();
        let i = 0;
        let j = nums.length - 1;

        while (i < j) {
            hashMap.set(nums[i], i);
            hashMap.set(nums[j], j);
            const currSum = nums[i] + nums[j];
            if (target === currSum) return [Math.min(hashMap.get(target - nums[i]), i), Math.max(hashMap.get(target - nums[j]), j)];
            if (currSum < target) i += 1;
            if (currSum > target) j -= 1;
        }
    }
}

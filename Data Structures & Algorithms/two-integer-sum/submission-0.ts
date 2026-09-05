class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let i: number = 0;
        let j: number = nums.length - 1;

        while (i < j) {
            if (nums[i] + nums[j] === target) return [i, j];
            if (nums[i] + nums[j] < target) i += 1;
            if (nums[i] + nums[j] > target) j -= 1;
        }
    }
}

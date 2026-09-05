class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // brute force
        const nLength = nums.length;
        const output = new Set();

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nLength - 2; i += 1) {
            for (let j = i + 1; j < nLength - 1; j += 1) {
                for (let k = j + 1; k < nLength; k += 1) {
                    if (nums[i] + nums[j] + nums[k] === 0) output.add(JSON.stringify([nums[i], nums[j], nums[k]]));
                }
            }
        }
        return Array.from(output).map(triplet => JSON.parse(triplet));
    }
}

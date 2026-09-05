class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // brute force
        const nLength = nums.length;
        const output = [];

        for (let i = 0; i < nLength - 2; i += 1) {
            for (let j = i + 1; j < nLength - 1; j += 1) {
                for (let k = j + 1; k < nLength; k += 1) {
                    const converted = [nums[i], nums[j], nums[k]].sort((a, b) => a-b).join(',');
                    if (nums[i] + nums[j] + nums[k] === 0 && !output.includes(converted)) output.push(converted);
                }
            }
        }
        return output.map(str => str.split(',').map(num => parseInt(num)));
    }
}

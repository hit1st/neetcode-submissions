class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0;
        let j = nums.length - 1;

        const indexedNums = nums.map((num, i) => [num, i]).sort((a,b) => a[0] - b[0]);

        while (i < j) {
            const sum = indexedNums[i][0] + indexedNums[j][0];
            if (sum === target) return [indexedNums[i][1], indexedNums[j][1]];
            if (sum < target) i += 1;
            if (sum > target) j -= 1;
        }
    }
}

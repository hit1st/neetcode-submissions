class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const setNums = new Set(nums);
        let longest = 0;

        for (const num of setNums) {
            if (!setNums.has(num - 1)) {
                let length = 1;
                while (setNums.has(num + length)) {
                    length += 1;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}

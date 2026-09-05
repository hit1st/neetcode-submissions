class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;

        const set = new Set(nums);

        for (const num of set) {
            let length = 0;
            if (num - 1) {
                length = 1;
                while (set.has(num + length)) {
                    length += 1;
                }
            }
            longest = Math.max(longest, length);
        }
        return longest;
    }
}

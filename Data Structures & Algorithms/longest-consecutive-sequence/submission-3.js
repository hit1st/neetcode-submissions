class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for (const num of set) {
            if (!set.has(num - 1)) {
                let length = 1;
                while (set.has(num + length)) {
                    length += 1;
                }
            longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}

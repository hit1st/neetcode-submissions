class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numSet = new Set(nums);
        const uniqueNums = Array.from(numSet);

        return uniqueNums.slice(uniqueNums.length - k);
    }
}

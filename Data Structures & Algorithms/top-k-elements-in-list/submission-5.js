class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqBucket = Array.from({ length: nums.length + 1 }, () => []);
        const freqMap = {};

        for (const num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }

        for (const [num, freq] of Object.entries(freqMap)) {
            freqBucket[freq].push(num);
        }

        const result = [];
        for (let i = freqBucket.length - 1; i > 0; i -= 1) {
            for (const num of freqBucket[i]){
                result.push(num);
                if (result.length === k) return result;
            }
        }
    }
}

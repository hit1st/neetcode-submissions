class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencies = Array.from({ length: nums.length + 1}, () => []);
        const freqMap = {};

        for (const num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }

        for (const [num, freq] of Object.entries(freqMap)) {
            frequencies[freq].push(parseInt(num, 10));
        }

        const res = [];
        for (let i = frequencies.length - 1; i >= 0; i -= 1) {
            for (let num of frequencies[i]) {
                res.push(num);
                if (res.length === k) return res;
            }
        }
    }
}

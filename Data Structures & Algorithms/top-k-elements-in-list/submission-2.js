class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = {}

        nums.forEach(num => {
            if (!hashMap.hasOwnProperty(num)) hashMap[num] = 0;
            hashMap[num] += 1;
        });

        const kSortedNums = Object.entries(hashMap).sort(([a_, a], [b_, b]) => a - b);

        return kSortedNums.slice(kSortedNums.length - k).map(num => parseInt(num[0]));
    }
}

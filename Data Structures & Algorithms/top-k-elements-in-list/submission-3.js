class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // const hashMap = {}

        // nums.forEach(num => {
        //     if (!hashMap.hasOwnProperty(num)) hashMap[num] = 0;
        //     hashMap[num] += 1;
        // });

        // const kSortedNums = Object.entries(hashMap).sort(([a_, a], [b_, b]) => a - b);

        // return kSortedNums.slice(kSortedNums.length - k).map(num => parseInt(num[0]));
        const count = new Map();
        const topK = new Map();
        
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }
        
        for (const [num, freq] of count) {
            topK.set(num, freq);
            if (topK.size > k) {
            const [ a, b ] = topK;
            const lowerKKey = a[1] < b[1] ? a[0] : b[0];
            if (freq > topK.get(lowerKKey)) topK.delete(lowerKKey);
            else topK.delete(num);
            }
        }
        
        return [...topK.keys()];
    }
}

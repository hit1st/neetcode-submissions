class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // create hash map
        const count = {};

        // loop through nums
        for (let i = 0; i < nums.length; i += 1) {
            const num = nums[i]
        // if key does not exist add to hash map and set value to 1
            if (!count[num]) count[num] = 1;
        // else add one to current value of key
            else count[num] += 1;
        }
        // use Object.entries to create and array of array where element 0 is the key value and element 1 in the frequency value
        const valuesInDescendingFrequency = Object.entries(count).sort((a, b) => b[1] - a[1]).map((pair) => pair[0]);
        // sort the array using element index 1, descending frequency (b - a), and map to the index zero element
        // return first k elements in an array
        return valuesInDescendingFrequency.slice(0, k);
    }
}

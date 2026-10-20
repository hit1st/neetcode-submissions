class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const visited = new Set();

        for (let i = 0; i < nums.length; i += 1) {
            if (visited.has(nums[i])) return true;
            visited.add(nums[i]);
        }

        return false;
    }
}
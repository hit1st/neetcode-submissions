class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unique = new Set();

        for (let i = 0; i < nums.length; i += 1) {
            if (unique.has(nums[i])) return true;
            unique.add(nums[i]);
        }

        return false;
    }
}

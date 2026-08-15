class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const alreadySeen = new Set();

        for (let i = 0; i < nums.length; i += 1) {
            const curr = nums[i];
            if (alreadySeen.has(curr)) return true;
            alreadySeen.add(curr);
        }

        return false;
    }
}
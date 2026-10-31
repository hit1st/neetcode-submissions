class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        // sliding window
        // define a left index l for sliding window
        let l = 0;
        // define longest to keep track of longest subarray
        let longest = 0;

        // loop through nums by r using r as right index of sliding window
        for (let r = 0; r < nums.length; r += 1) {
            // if (nums[r] === 0) decrement k
            k -= (nums[r] === 0) ? 1 : 0;
            // while (k < 0)
            while (k < 0) {
                // if (nums[l] === 0) increment k
                k += (nums[l] === 0) ? 1 : 0;
                // increment l
                l += 1;
            }
            // longest = Math.max(longest, r - l + 1)
            longest = Math.max(longest, r - l + 1);
        }
        // return longest
        return longest;
    }
}

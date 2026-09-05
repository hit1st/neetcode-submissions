class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // brute force nested loop
        return nums.map((_, i) => {
            return nums.reduce((acc, num, j) => {
                if (i === j) return acc;
                return acc * num;
            }, 1);
        })
    }
}

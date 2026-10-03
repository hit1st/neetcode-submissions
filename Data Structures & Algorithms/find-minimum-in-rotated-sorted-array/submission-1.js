class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r =  nums.length - 1;

        while (l < r) {
            const m = l + Math.floor((r - l) /2);

            if (nums[l] <= nums[m]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return nums[l];
    }
}

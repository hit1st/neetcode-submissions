class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const output = new Set();

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] > 0) break;

            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const currSum = nums[i] + nums[l] + nums[r];

                if (currSum > 0) r -= 1;
                if (currSum < 0) l += 1;
                if (currSum === 0) {
                    output.add([nums[i], nums[l], nums[r]]);
                    l += 1;
                    r -= 1;
                    while (nums[l] === nums[l - 1]) l += 1;
                }
            }
        }

        return Array.from(output);
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a: number, b: number) => a - b);
        const res: number[][] = [];

        for (let i: number = 0; i < nums.length - 2; i += 1) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l: number = i + 1;
            let r: number = nums.length - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r -= 1;
                } else if (sum < 0) {
                    i += 1;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l += 1;
                    r -= 1;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l += 1;
                    }
                }
            }
        }

        return res;
    }
}

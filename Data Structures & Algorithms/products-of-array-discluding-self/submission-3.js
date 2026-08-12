class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // brute force nested loop
        // return nums.map((_, i) => {
        //     return nums.reduce((acc, num, j) => {
        //         if (i === j) return acc;
        //         return acc * num;
        //     }, 1);
        // })
        // let prefix = [1];
        // let suffix = [];
        // let totalProd = 1;

        // for (let i = 1; i < nums.length; i += 1) {
        //     totalProd *= nums[i-1];
        //     prefix.push(totalProd);
        // }

        // totalProd = 1;
        // suffix[nums.length - 1] = 1;
        // for (let i = nums.length - 2; i > -1; i -= 1) {
        //     totalProd *= nums[i+1];
        //     suffix[i] = totalProd;
        // }

        // return prefix.map((num, i) => num * suffix[i]);
        let zeroCount = 0;
        
        const totalProd = nums.reduce((acc, num) => {
            if (num === 0) zeroCount += 1;
            return num === 0 ? acc : acc *= num;
        }, 1);

        if (zeroCount > 1) return Array(nums.length).fill(0);

        if (zeroCount === 0) return nums.map(num => totalProd / num);

        return nums.map((num => num === 0 ? totalProd : 0));
    }
}

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let top = 0;
        let bot = ROWS - 1;

        while (top < bot) {
            const mid = Math.floor((top + bot) / 2);
            const midRow = matrix[mid];

            if (target < midRow[0]) {
                bot = mid - 1
            } else  if (target > midRow[COLS - 1]) {
                top = mid + 1;
            } else {
                break;
            }
        }


        if (!(top <= bot)) return false;

        let row = matrix[Math.floor((top + bot) / 2)];
        let l = 0;
        let r = COLS - 1;


        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (target < row[m]) {
                r = m - 1;
            } else if (target > row[m]) {
                l = m + 1;
            } else {
                return true;
            }
        }

        return false;
    }
}

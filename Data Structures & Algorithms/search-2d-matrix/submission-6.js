class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let t = 0;
        let b = ROWS - 1;

        while (t <= b) {
            const mR = Math.floor((t + b) / 2);
            const mRow = matrix[mR];

            if (target < mRow[0]) {
                b = mR - 1;
            } else if (target > mRow[COLS - 1]) {
                t = mR + 1;
            } else {
                break;
            }
        }

        if (!(t <= b)) return false;

        const row = matrix[Math.floor((t + b) / 2)];

        let l = 0;
        let r = COLS - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (target === row[m]) return true;
            if (target < row[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return false;
    }
}

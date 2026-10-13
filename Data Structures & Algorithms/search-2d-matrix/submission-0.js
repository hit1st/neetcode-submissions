class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let tRow = 0;
        let bRow = matrix.length - 1;
        let targetRow = [];


        while (tRow <= bRow) {
            const mRow = Math.floor((tRow + bRow) / 2);
            const midRow = matrix[mRow];

            if (target >= midRow[0] && target <= midRow[midRow.length - 1]) {
                targetRow = midRow;
                break;
            }
            if (target > midRow[midRow.length - 1]) {
                tRow = mRow + 1;
            } else {
                bRow = mRow - 1;
            }
        }

        let l = 0;
        let r = targetRow.length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (target === targetRow[m]) return true;
            if (target > targetRow[m]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return false;
    }
}

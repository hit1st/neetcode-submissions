class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const squares = new Map();

        for (let row = 0; row < 9; row += 1) {
            for (let col = 0; col < 9; col += 1) {
                const boxValue = board[row][col];
                if (boxValue === '.') continue;

                const key = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;

                if (
                    rows.has(row) && rows.get(row).has(boxValue) ||
                    cols.has(col) && cols.get(col).has(boxValue) ||
                    squares.has(key) && squares.get(key).has(boxValue)
                ) return false;
        

                if (!rows.has(row)) rows.set(row, new Set());
                if (!cols.has(col)) cols.set(col, new Set());
                if (!squares.has(key)) squares.set(key, new Set());

                rows.get(row).add(boxValue);
                cols.get(col).add(boxValue);
                squares.get(key).add(boxValue);
            }
        }

        return true;
    }
}

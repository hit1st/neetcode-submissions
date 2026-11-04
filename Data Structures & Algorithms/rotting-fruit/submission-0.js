class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = [];
        let time = 0;
        let fresh = 0;

        const ROWS = grid.length;
        const COLS = grid[0].length;
        for (let r = 0; r < ROWS; r += 1) {
            for (let c = 0; c < COLS; c += 1) {
                if (grid[r][c] === 1) {
                    fresh++;
                }
                if (grid[r][c] === 2) {
                    q.push([r, c]);
                }
            }
        }

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        while (q.length > 0 && fresh > 0) {
            for (let i = 0; i < q.length; i += 1) {
                const [r, c] = q.shift();
                for (const [dr, dc] of directions) {
                    const row = dr + r;
                    const col = dc + c;
                    if (
                        row < 0 || row === ROWS ||
                        col < 0 || col === COLS ||
                        grid[row][col] !== 1
                    ) {
                        continue;
                    }
                    grid[row][col] = 2;
                    q.push([row, col]);
                    fresh -= 1;
                }
            }
            time += 1;
        }
        return fresh === 0 ? time : -1;
    }
}

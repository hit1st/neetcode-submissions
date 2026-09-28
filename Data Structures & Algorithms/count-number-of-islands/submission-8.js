class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0] ? grid[0].length : 0;
        let islands = 0;

        const flood = (r, c) => {
            grid[r][c] = '0';

            if (r > 0 && grid[r - 1][c] === '1') flood(r - 1, c);
            if (c < cols - 1 && grid[r][c + 1] === '1') flood(r, c + 1);
            if (r < rows - 1 && grid[r + 1][c] === '1') flood(r + 1, c);
            if (c > 0 && grid[r][c - 1] === '1') flood(r, c - 1);
        };

        for (let r = 0; r < rows; r += 1) {
            for (let c = 0; c < cols; c += 1) {
                if (grid[r][c] === '0') continue;

                flood(r, c);
                islands += 1;
            }
        }

        return islands;
    }
}

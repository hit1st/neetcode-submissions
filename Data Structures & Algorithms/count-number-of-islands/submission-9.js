class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // declare variable lslands to keep track of islands
        // define helper function "flood" to traverse grid using dfs and change '1' to '0' 
        // loop through grid
            // get element value
            // if element value === '0' continue
            // call flood(row, col);
            //increment islands
        // return islands

        const ROWS = grid.length;
        const COLS = grid[0].length;
        let islands = 0;

        const flood = (row, col) => {
            grid[row][col] = '0';

            // check top
            if (row > 0 && grid[row - 1][col] === '1') flood(row - 1, col);
            // check right
            if (col < COLS - 1 && grid[row][col + 1] === '1') flood(row, col + 1);
            // check bottom
            if (row < ROWS - 1 && grid[row + 1][col] === '1') flood(row + 1, col);
            // check left
            if (col > 0 && grid[row][col - 1] === '1') flood(row, col - 1);
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c ++) {
                if (grid[r][c] === '0') continue;

                flood(r, c);
                islands++;
            }
        }

        return islands;
    }
}

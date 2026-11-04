class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const queue = () => {
            const items = {};
            let head = 0;
            let tail = 0;

            const isEmpty = () => tail - head === 0;

            const enqueue = (val) => {
                items[tail] = val;
                tail++;
            };

            const dequeue = () => {
                if (isEmpty()) return null;
                
                const item = items[head];
                delete items[head];
                head++;
                return item;
            };

            const peek = () => {
                if (isEmpty()) return null;
                return items[head];
            }

            const size = () => tail - head;
            
            return ({
                enqueue,
                dequeue,
                isEmpty,
                peek,
                size
            });
        };
        // BFS guarantees the first time we reach destination is via the shortest path
        const M = grid.length;
        const N = grid[0].length;

        // Edge cases
        // If start or destination is blocked, no path exists
        // if (grid[0][0] === 1 || grid[M - 1][N - 1] === 1) return -1;
        // If start === destination, path length === 0
        // if (M === 1 && N === 1) return 0;

        // create a visited matrix to keep track of grid point we have already seeen (fill with false)
        // set first element to true
        // Create simple queue ([[row, col, steps]]) using array
        // declare directions matrix [top, bottom, left, right,...(<bottom, right>, <top, left>, <bottom, left>, <top, right>)]
        // while queue is not empty
            // pop queue and destructure [row, col, steps]
            // if (r === N - 1 && c === N - 1) return length
            // for loop directions destructure [dr (direction row), dc (direction column)]
                // declare nr (next row) === r + dr
                // declare nc (next col) === c + dc
                // if (
                    // nr >= 0 &&
                    // nc >= 0 &&
                    // nr >= 0 &&
                    // nr < N &&
                    // nc < N &&
                    // grid[nr][nc] === 0 &&
                    // !visited[nr][nc]
                // ) {
                    // push [nr, ns, length + 1] to queue;
                    // set visited[nr][nc] = true
                // }
        // if while loop completes return -1

        if (grid[0][0] === 1 || grid[M - 1][N - 1] === 1) return -1;
        if (M === 1 && N === 1) return 1;

        const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
            [1, 1],
            [-1, -1],
            [1, -1],
            [-1, 1],
        ];
        const visit = Array.from({ length: M }, () => Array(N).fill(false));

        const q = queue();
        q.enqueue([0, 0, 1]);
        // const q = [[0, 0, 1]];
        // let head = 0;
        visit[0][0] = true;

        while (q.size() > 0) {
            const [r, c, length] = q.dequeue();
            // const [r, c, length] = q[head];
            // head += 1;
            if (r === M - 1 && c === N - 1) return length;

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < M &&
                    nc < N &&
                    grid[nr][nc] === 0 &&
                    !visit[nr][nc]
                ) {
                    q.enqueue([nr, nc, length + 1]);
                    visit[nr][nc] = true;
                }
            }
        }
        return -1;
    }
}

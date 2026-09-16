class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return '';

        const tCount = {};
        const window = {};
        for (const c of t) {
            tCount[c] = (tCount[c] || 0) + 1;
        }

        const have = Object.keys(tCount).length;
        let need = 0;
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0;

        for (let r = 0; r < s.length; r += 1) {
            const c = s[r];
            window[c] = (window[c] || 0) + 1;

            if (tCount[c] && tCount[c] === window[c]) need += 1;

            while (need === have) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                if (window[s[l]] === tCount[s[l]]) {
                    window[s[l]] -= 1;
                    need -= 1;
                }
                l += 1;

            }

        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}

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

        const need = Object.keys(tCount).length;
        let have = 0;
        let res = [-1, -1];
        let resLen = Infinity;
        let mostFreq = 0;
        let l = 0;

        for (let r = 0; r < s.length; r += 1) {
            const ch = s[r];
            window[ch] = (window[ch] || 0) + 1;
            mostFreq = Math.max(mostFreq, window[ch]);
            if (tCount[ch] && window[ch] === tCount[ch]) have += 1;

            while (need === have) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                window[s[l]] -= 1;
                if (tCount[s[l]] && window[s[l]] < tCount[s[l]]) have -= 1;
                l += 1;
            }
        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}

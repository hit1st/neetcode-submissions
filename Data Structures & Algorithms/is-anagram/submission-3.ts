class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        // let newS: string = s;
        // let newT: string = t;

        // for (const char of s) {
        //     newS = newS.replace(char, "");
        //     newT= newT.replace(char, "");
        // }

        // return newS.length === newT.length;
        // const newS = s.split("").sort().join();
        // const newT = t.split("").sort().join();

        // return newS === newT;
        const countS: object = {};
        const countT: object = {};

        for (let i:number = 0; i < s.length; i += 1) {
            countS[s[i]] = (countS[s[i]] || 0) + 1;
            countT[t[i]] = (countT[t[i]] || 0) + 1;
        }

        for (const key in countS) {
            if (countS[key] !== countT[key]) return false;
        
        }

        return true;
    }
}

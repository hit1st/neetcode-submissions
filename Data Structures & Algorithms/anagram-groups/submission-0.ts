class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // create and isAnagram function
        const isAnagram = (s1: string, s2: string): boolean => {
            if (s1.length !== s2.length) return false;

            const s1CharCount: Record<string, number> = {};
            const s2CharCount: Record<string, number> = {};

            for (let i: number = 0; i < s1.length; i += 1) {
                s1CharCount[s1[i]] = (s1CharCount[s1[i]] || 0) + 1;
                s2CharCount[s2[i]] = (s2CharCount[s2[i]] || 0) + 1;
            }

            const keys = Object.keys(s1CharCount);

            for (let key of keys) {
                if (s1CharCount[key] !== s2CharCount[key]) return false;
            }

            return true;
        }

        let output: string[][] = [];
        let isGrouped: string[] = [];
        // loop through array
        for (let i: number = 0; i < strs.length; i += 1) {
        //   if string is not already grouped in isGrouped array
            if (!isGrouped.includes(strs[i])) {
        //     add to a new array (currentList)
              let currentList: string[] = [strs[i]];
        //     add to isGrouped
              isGrouped = [...isGrouped, strs[i]];
        //     loop through remaining elements
              for (let j: number = i + 1; j < strs.length; j +=1) {
        //       if string is not already grouped in isGrouped array
                if (!isGrouped.includes(strs[j])) {
        //         if current string is anagram of currentList[0] 
                  if (isAnagram(currentList[0], strs[j])) {
        //           add to currentList
                    currentList = [...currentList, strs[j]];
        //           add string to isGrouped
                    isGrouped = [...isGrouped, strs[j]];
                  }
                }
              }
        //     Add currentList to output
              output = [...output, currentList];
            }
        }
        // return output
        return output;
    }
}

class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) this.keyStore.set(key, []);
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const row = this.keyStore.get(key);

        let l = 0;
        let r = row.length - 1;

        while (l < r) {
            const m = Math.floor((l + r) / 2);

            if (timestamp < row[m][1]) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        return row[l][0];
    }
}

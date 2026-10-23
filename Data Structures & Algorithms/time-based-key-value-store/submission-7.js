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
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key) || [];

        let l = 0;
        let r = values.length - 1;
        let res = '';

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (timestamp >= values[m][0]) {
                res = values[m][1];
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}

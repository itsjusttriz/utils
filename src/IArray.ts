export class IArray extends Array {
    constructor(items?: any[]) {
        super();
        if (items)
            this.push(...items)
    }

    /**
     * Get the first element of the Array. Cannot be chained.
     */
    getFirst() {
        return this[0]
    }

    /**
     * Get the last element of the Array. Cannot be chained.
     */
    getLast() {
        return this.at(-1)
    }

    /**
     * Get a random element of the Array. Cannot be chained.
     */
    getRandom() {
        return this[Math.floor((Math.random() * this.length))];
    }
}

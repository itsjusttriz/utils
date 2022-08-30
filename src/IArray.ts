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
     * Get the first element of the Array. Cannot be chained.
     */
    getLast() {
        return this[this.length - 1]
    }

    /**
     * Get the first element of the Array. Cannot be chained.
     */
    getRandom() {
        return this[Math.floor((Math.random() * this.length))];
    }
}
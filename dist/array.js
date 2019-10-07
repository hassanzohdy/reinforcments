"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Arr {
    /**
     * Constructor
     *
     * @param {array} items
     */
    constructor(items) {
        /**
         * Counter of array;
         *
         * @type {number}
         */
        this.counter = 0;
        /**
         * {@inheritdoc}
         */
        this.items = [];
        this.items = items;
    }
    /**
     * {@inheritdoc}
     */
    min() {
        return Math.min(...this.items);
    }
    /**
     * {@inheritdoc}
     */
    max() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    avg() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    average() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    merge(...arrays) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    concat(...arrays) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    unique() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    shift(...items) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    unshift() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    push(...items) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    pushOnce(...items) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    pop() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    end() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    remove(value) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    removeAll(value) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    first(callback) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    includes(value) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    toArray() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    map(callback) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    forEach(callback) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    filter(callback) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    sort(callback) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    sortBy(key) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    sortByDesc(key) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    reduce(callback, initialValue) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    chunk(size) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    clone() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    reverse() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    key(value) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    indexOf(value) {
        return this.items.indexOf(value);
    }
    /**
     * {@inheritdoc}
     */
    lastIndexOf(value) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    isEmpty() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    isNotEmpty() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    random() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    replace(oldValue, newValue) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    replaceAll(oldValue, newValue) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    shuffle() {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    slice(begin, end) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    splice(start, deleteCount, ...items) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    some(callback) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    every(callback) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    unset(...keys) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    on(event, callback) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    once(event, callback) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    subscribe(event, callback) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    trigger(event, ...values) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    emit(event, ...values) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    off(event) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    macro(methodName, callback) {
        throw new Error("Method not implemented.");
    }
    /**
     * {@inheritdoc}
     */
    get length() {
        return this.items.length;
    }
    /**
     * {@inheritdoc}
     */
    [Symbol.iterator]() {
        this.counter = 0;
        return {
            next: () => {
                return {
                    done: this.length == this.counter,
                    value: this.items[this.counter++],
                };
            },
        };
    }
}
exports.default = Arr;
//# sourceMappingURL=array.js.map
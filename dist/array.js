"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Arr = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {array} items
     */
    function Arr(items) {
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
    Arr.prototype.min = function () {
        return Math.min.apply(Math, __spread(this.items));
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.max = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.avg = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.average = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.merge = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.unique = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.shift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.unshift = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.pushOnce = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.pop = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.end = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.remove = function (value) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.removeAll = function (value) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.first = function (callback) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.includes = function (value) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.toArray = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.map = function (callback) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.forEach = function (callback) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.filter = function (callback) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.sort = function (callback) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.sortBy = function (key) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.sortByDesc = function (key) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.reduce = function (callback, initialValue) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.chunk = function (size) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.clone = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.reverse = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.key = function (value) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.indexOf = function (value) {
        return this.items.indexOf(value);
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.lastIndexOf = function (value) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.isEmpty = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.isNotEmpty = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.random = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.replace = function (oldValue, newValue) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.replaceAll = function (oldValue, newValue) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.shuffle = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.slice = function (begin, end) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.splice = function (start, deleteCount) {
        var items = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            items[_i - 2] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.some = function (callback) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.every = function (callback) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.unset = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.on = function (event, callback) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.once = function (event, callback) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.subscribe = function (event, callback) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.trigger = function (event) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.emit = function (event) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.off = function (event) {
        throw new Error("Method not implemented.");
    };
    /**
     * {@inheritdoc}
     */
    Arr.prototype.macro = function (methodName, callback) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(Arr.prototype, "length", {
        /**
         * {@inheritdoc}
         */
        get: function () {
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritdoc}
     */
    Arr.prototype[Symbol.iterator] = function () {
        var _this = this;
        return {
            next: function () {
                return {
                    done: _this.length == _this.counter,
                    value: _this.items[_this.counter++],
                };
            },
        };
    };
    return Arr;
}());
exports.default = Arr;
//# sourceMappingURL=array.js.map
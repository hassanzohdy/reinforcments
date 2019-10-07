"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("./array"));
exports.Arr = array_1.default;
exports.$_ = function (value) {
    if (Array.isArray(value)) {
        return new array_1.default(value);
    }
};
exports.default = exports.$_;
//# sourceMappingURL=reinforcer.js.map
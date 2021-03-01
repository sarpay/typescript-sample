"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    // not needed since constructor has access modifiers
    // private _x: number;
    // _y: number;
    // params can be set as optional (?) since we cannot have multiple constructors.
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // not needed since constructor has access modifiers
        // this._x = _x;
        // this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x);
        console.log('Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        // needed since X is set as private
        get: function () {
            return this._x;
        },
        // X is private but can be set after simple validation.
        set: function (value) {
            if (value <= 0) {
                throw new Error('value cannot be less than 1');
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;

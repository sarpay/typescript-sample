export class Point {
    // not needed since constructor has access modifiers
    // private _x: number;
    // _y: number;

    // params can be set as optional (?) since we cannot have multiple constructors.
    constructor(private _x?: number, public _y?: number) {
        // not needed since constructor has access modifiers
        // this._x = _x;
        // this._y = _y;
    }

    draw() {
        console.log('X: ' + this._x);
        console.log('Y: ' + this._y);
    }

    // needed since X is set as private
    get x() {
        return this._x;
    }

    // X is private but can be set after simple validation.
    set x(value) {
        if (value <= 0) {
            throw new Error('value cannot be less than 1');
        }

        this._x = value;
    }
}
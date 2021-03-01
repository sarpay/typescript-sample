import { Point } from './module'

let point = new Point(1, 2);

point._y = 4;

let xGetter = point.x; // getter
console.log('X Getter: ' + xGetter);

// point._x = 3; // cannot be accessed, prop set to private.
point.x = 10; // setter on private prop used for simple validation.

point.draw();

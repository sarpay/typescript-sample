"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require("./module");
var point = new module_1.Point(1, 2);
point._y = 4;
var xGetter = point.x; // getter
console.log('X Getter: ' + xGetter);
// point._x = 3; // cannot be accessed, prop set to private.
point.x = 10; // setter on private prop used for simple validation.
point.draw();

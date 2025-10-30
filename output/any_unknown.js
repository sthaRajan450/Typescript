"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var value;
value = 'rajan';
// value=true;
value = ['a', 'b'];
// unknown enfore type checking
if (typeof value == 'string') {
    console.log(value.toUpperCase());
}

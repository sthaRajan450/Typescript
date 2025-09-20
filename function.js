"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(b) {
    return b + 2;
    // return "hello";
}
function getUpperCase(value) {
    return value.toUpperCase();
}
console.log(addTwo(4));
console.log(getUpperCase('a'));
function login(name, email, password, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
}
login('rajan', 'stharajan@gmail.com', "43r", true);
// const heros=['thor','ironman','spiderman']
var heros = [1, 2, 3];
var heroIntro = heros.map(function (hero) { return ("hero is ".concat(hero)); });
console.log(heroIntro);



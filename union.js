"use strict";
// let score:number |string=30;
Object.defineProperty(exports, "__esModule", { value: true });
var rajan = {
    name: 'Rajan',
    id: 342
};
rajan = { username: 'raj450', id: 12324 };
function getDbId(id) {
    // console.log(`Db id is ${id}`)
    if (typeof id == 'string') {
        return id.toUpperCase();
    }
    else {
        return id + 2;
    }
}
console.log(getDbId(45));
var data = [];
data.push("rajan");

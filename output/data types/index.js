"use strict";
// categories
// primitive 
// number,string,boolena,bigint,undefined,null
Object.defineProperty(exports, "__esModule", { value: true });
var username = 'rajan';
var age = 23;
var isMale = true;
var data = null;
var data1;
var sym1 = Symbol(); //generate unique memory address even though value is same
var sym2 = Symbol('apple');
var sym3 = Symbol('apple');
console.log(sym2 == sym3);
console.log(data1);
// object
// array, tuple,object
var numbers = [1, 3]; //collection of values of same types
var person = ['raj', 45];
var user = { name: 'rajan', age: 23 };
// special
//any,unknown,void,never
var x = 56;
x = 'df';
x = true;
// advanced
// union,intersection,type,enum,literals
var num = 45;
num = 'er';
// function

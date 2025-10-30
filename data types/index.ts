
// categories
// primitive 
    // number,string,boolena,bigint,undefined,null

var username:string='rajan';
var age:number=23;
var isMale:boolean=true
var data:null=null;
var data1:undefined;
var sym1=Symbol(); //generate unique memory address even though value is same
var sym2=Symbol('apple');
var sym3=Symbol('apple');  
console.log(sym2==sym3)
console.log(data1);

// object
    // array, tuple,object
var numbers:number[]=[1,3]  //collection of values of same types

var person:[string,number]=['raj',45]

var user :{ name:string,age:number}={name:'rajan',age:23}
// special
    //any,unknown,void,never

var x:any=56;
x='df';
x=true;



// advanced
    // union,intersection,type,enum,literals
    var num:number|string=45;
    num='er'
   
// function
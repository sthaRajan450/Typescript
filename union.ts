import tb = require("react-icons/tb");

let data:number|string|boolean|number[];
data=45;
data='rajan'
data=true
data=[35,6,7,8]
// data=null


// function abcd():never{
//    while(true)
//    {
//     console.log("hello")
//    }
// }

function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else {
    throw new Error('Both parameters must be of the same type');
  }
}

add(23,5)

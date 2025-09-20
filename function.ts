function addTwo(b:number):number{
    
    return b+2;
    // return "hello";
}

function getUpperCase(value:string){
    return value.toUpperCase()
}
console.log(addTwo(4))
console.log(getUpperCase('a'))


function login(name:string,email:string,password:string,isPaid:boolean=true){

}
login('rajan','stharajan@gmail.com',"43r",true)

// const heros=['thor','ironman','spiderman']
const heros=[1,2,3]
const heroIntro= heros.map((hero):string=>(
    `hero is ${hero}`
))

console.log(heroIntro)

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}
handleError('hello')
export {}
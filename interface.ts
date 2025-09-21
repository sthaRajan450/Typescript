interface User{
    readonly db_id:number,
    email:string,
    userId:number,
    googleId?:string,
    // startTrail:()=>string
    startTrail():string,
    getCoupon(couponname:string,value:number):number
}


// reopening of interface
interface User
{
    githubToken:string
}

// inheritance
interface Admin extends User{
    role:'admin'|'user'
}
const rajan:Admin={ githubToken:'github',role:"admin",email:'rajan@gmail.com',userId:1,db_id:343,startTrail:()=>{
    return "hello k cha khabar?"
},getCoupon:(name:'rajan',off:10)=>{
    return 20;
}}
rajan.email='r@gmail.com'
console.log(rajan)
// console.log('typescript is here')
// console.log('typescript is awesome')

// class User{
//    public email:string;
//     name:string;
//    private readonly city:string=''
//     constructor(email:string,name:string)
//     {
//         this.email=email;
//         this.name=name;
    
//     }
// }

class User{
    private _courseCount=1;
    constructor(public email:string,public name:string,private userId:string){
    }

    private deleteToken(){
        console.log('token deleted')
    }

    get getAppleEmail():string{
        return `apple ${this.email}`
    }

   get courseCount():number{
    return this._courseCount
   }

   set courseCount(courseNumber){
     if(courseNumber<=1)
     {
        throw new Error('course count should be more than one ')
     }
     this._courseCount=courseNumber
   }


    
}

const user1=new User('r@gmail.com','rajan','32');
user1.courseCount=4
console.log(user1.courseCount)

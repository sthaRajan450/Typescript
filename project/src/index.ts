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
    constructor(public email:string,public name:string,private userId:string){
    }
}

const user1=new User('r@gmail.com','rajan','32')
console.log(user1)

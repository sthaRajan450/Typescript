"use strict";
// console.log('typescript is here')
// console.log('typescript is awesome')
Object.defineProperty(exports, "__esModule", { value: true });
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
class User {
    email;
    name;
    userId;
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
}
const user1 = new User('r@gmail.com', 'rajan', '32');
console.log(user1);
//# sourceMappingURL=index.js.map
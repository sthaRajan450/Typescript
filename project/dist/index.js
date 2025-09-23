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
    _courseCount = 1;
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
    deleteToken() {
        console.log('token deleted');
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error('course count should be more than one ');
        }
        this._courseCount = courseNumber;
    }
}
const user1 = new User('r@gmail.com', 'rajan', '32');
user1.courseCount = 4;
console.log(user1.courseCount);
//# sourceMappingURL=index.js.map
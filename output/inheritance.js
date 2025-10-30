"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    login(name, password) {
        if (name && password) {
            return `student logged In!`;
        }
        else {
            return 'not logged in';
        }
    }
}
class Student extends Auth {
    result(marks) {
        if (marks > 33) {
            return 'passed';
        }
        else {
            return 'Failed';
        }
    }
}
class Teacher extends Student {
    subject(subject) {
        return 'teaches ' + subject;
    }
}
var s1 = new Student();
console.log(s1.login('rajan', 'rajan124'));
// console.log(s1.result(50))
var t1 = new Teacher();
// console.log(t1.subject('math'))

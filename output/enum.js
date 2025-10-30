"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["management"] = "management";
    whoType["labstaff"] = "labstaff";
})(whoType || (whoType = {}));
var who = whoType.student;
who = whoType.teacher;
var User;
(function (User) {
    User["a"] = "admin";
    User["b"] = "user";
})(User || (User = {}));
var user = User.a;
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["manager"] = 1] = "manager";
    Roles[Roles["developer"] = 2] = "developer";
    Roles[Roles["qa"] = 3] = "qa";
    Roles[Roles["user"] = 4] = "user";
})(Roles || (Roles = {}));
var userRole = Roles.developer;
console.log(userRole);

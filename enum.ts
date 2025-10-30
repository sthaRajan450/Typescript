enum whoType{
    student='student',
    teacher='teacher',
    management='management',
    labstaff='labstaff'
}

var who:whoType=whoType.student;
who=whoType.teacher


enum User{
    a='admin',
    b='user'
}


var user:User=User.a;


enum Roles{
    admin,manager,developer,qa,user
}

var userRole:Roles=Roles.developer
console.log(userRole)
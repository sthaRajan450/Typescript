
class Auth{
login(name:string,password:string){
        if(name && password)
        {
            return `student logged In!`

        }
        else {
            return 'not logged in'
        }

    }
}
class Student extends Auth{
    
    result(marks:number){
        if(marks>33)
        {
            return 'passed'
        }
        else{
            return 'Failed'
        }

    }
}

class Teacher extends Student{

    subject(subject:string){
        return 'teaches '+subject
    }
}


var s1=new Student()
console.log(s1.login('rajan','rajan124'))
// console.log(s1.result(50))

var t1=new Teacher()
// console.log(t1.subject('math'))
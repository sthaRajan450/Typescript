//interface is a way to define structure of an object, function,etc

interface Info{
    name:string,
    age:number,
    college:string
}
interface addInfo{
    address:string
}

interface teacherType extends Info,addInfo{
    subject:string
  
}
let studentObj:Info={
    name:'rajan',
    age:23,
    college:"PMC"
}

let teacherInfo:teacherType={
    name:'pramod',
    age:30,
    college:"IOE",
    subject:'MERN',
    address:'Biratnagar'
}
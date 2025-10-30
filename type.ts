type dataType={
    name:string,
    age:number,
    email:string
}

type a={
   name:string,
   age:number
}
type b={
   email:string
}
type c=a|b;
var empData:dataType={
    name:'rajan',
    age:23,
    email:'raj@gamil.com'
}

var studentData:dataType={
    name:'rajan',
    age:23,
    email:'raj@gamil.com'
}
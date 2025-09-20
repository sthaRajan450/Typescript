// const User={
//     name:'Rajan',
//     email:"stharajan477@gmail.com",
//     isActive:true
// }

// function createUser({name:string,isPaid:boolean})
// {

// }
// createUser({name:'Rajan',isPaid:true})


// type aliase
// type User={
//     name:string,
//     email:string,
//     isActive:boolean
// }

// function createUser(user:User):User{
//     return  {name:'',email:"",isActive:true}
// }
// createUser({name:'',email:"",isActive:true})



type User={
  readonly _id:string,
    name:string,
    email:string,
    isActive:boolean,
    creditcardDetails?:number
}

let myUser:User={
    _id:'124',
    name:"rahan",
    email:"h@egamil.com",
   
    isActive:true}


myUser.email="raj@gmail.com"


type cardNumber={
    cardNumber:number
}
type cardDate={
    cardDate:string
}

type  cardDetails= cardNumber & cardDate &{
    cvv:number
}

const myCard:cardDetails={
    cardNumber:123,
    cardDate:'2059',
    cvv :32423523

}

export {}
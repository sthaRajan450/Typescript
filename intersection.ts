type personA={
    name:string
}
type personB={
    age:number
}

type personC=personA & personB

var personT:personC={
    name:'Rajan',
    age:23

}
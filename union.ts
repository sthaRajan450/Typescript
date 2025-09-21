// let score:number |string=30;

// score='Rajan'

type User={
    name:string,
    id:number
}
type Admin={
    username:string,
    id:number

}

let rajan:User|Admin={
    name:'Rajan',
    id:342
}

rajan={username:'raj450',id:12324}


function getDbId(id:number|string)
{
    // console.log(`Db id is ${id}`)

    if(typeof id=='string')
    {
        return id.toUpperCase()
    }
    else{
        return id+2
    }
}
console.log(getDbId(45))


const data:number|string[]=[]
data.push("rajan")

let seatAllotment:'aisle'|'middle'|'window'
seatAllotment='middle'
export {}
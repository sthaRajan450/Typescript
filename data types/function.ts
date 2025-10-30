function abcd():number|string{
  let data=34;
  let name='rajan'
  let type='age'
  if(type=='age')
  {
    return data;
  }
  else {
    return name;
  }
}

function anything():any{
    return 4;
}

function func1():never{
    // console.log('hello')

    while(true){
        console.log('loop')
    }
}

function simple():never{
    throw new Error('throw new error')
}
//Simple Example for promise.

const promise = new Promise((resolve,reject)=>{
    let STATUSCODE = 200
    if(STATUSCODE === 200){
        resolve('Sucess')
    }
    else{
        reject('Failure')
    }
})

//Callback function
const fullfilled=(message)=>{
   console.log(message+"!")
}

const Failure=(error)=>{
    console.log(error)
 }
promise.then(fullfilled)
promise.catch(Failure)
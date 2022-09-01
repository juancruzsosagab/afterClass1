const task = new Promise((resolve,reject)=>{
    resolve(true)
})

task.then(result =>{
    console.log(result)
})

const task2 = new Promise((resolve,reject)=>{
    reject(false)
})

task2.then(result =>{
    console.log(result)
}).catch(result=>console.log(result))
const task = new Promise((resolve, reject) => {
    resolve("Fui resuelta")
})

task
    .then(result => {
        console.log(result)
        console.log("Soy la tarea 1, entre al .then")
    })
    .catch((result) => {
        console.log(result)
        console.log("Soy la tarea 1, entre al .catch")
    })

const task2 = new Promise((resolve, reject) => {
    reject("No fui resulta correctamente")
})

task2
    .then(result => {
        console.log(result)
        console.log("Soy la tarea 2, entre al .then")
    })
    .catch((result) => {
        console.log(result)
        console.log("Soy la tarea 2, entre al .catch")
    }) 
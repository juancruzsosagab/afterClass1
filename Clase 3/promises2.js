const solicitudServidorUsuarios = (usuario) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "admin") {
                const usuarios = ["juan", "Ernesto", "Facundo"]
                resolve(["juan", "Ernesto", "Facundo"])
            } else {
                reject("Solo los usuarios con permiso de admin tiene acceso a esta información")
            }
        }, 2000)
    }
    )
}


//Quiero solicitar al servidor todos los usuarios registrados

solicitudServidorUsuarios("admin")
    .then(resultado => console.log(`Los usuarios registrados son: ${resultado}`))
    .catch(resultado => console.log(resultado))

    
solicitudServidorUsuarios("usuario general")
    .then(resultado => console.log(`Los usuarios registrados son: ${resultado}`))
    .catch(resultado => console.log(resultado))

//Promesa pending

//console.log(solicitudServidorUsuarios("admin"))
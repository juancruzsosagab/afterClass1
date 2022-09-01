let usuarios = [{ nombre: "Juan", identificacion: 111121 }, { nombre: "Pedro", identificacion: 111121 }] // array de objetos

const getUsersName = () => {
    const nombreUsuarios = []

    for (const usuario of usuarios) {
        nombreUsuarios.push(usuario.nombre)
    }

    return nombreUsuarios
}

const nombreUsuarios = getUsersName()
console.log(nombreUsuarios)
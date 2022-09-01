function saludar (oracion){
    const saludoGeneral = "Hola!"
    return function(){
        console.log(`${saludoGeneral}${oracion} Me alegra que estés aquí`)
    }
}

const saludo1 = saludar("¿Cómo estás?")
const saludo2 = saludar("¿Cómo te va?")

saludo1()
saludo2()
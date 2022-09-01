//Otro ejemplo de consola y de paso hablamos de array y objetos


console.log('abc');//String
 
console.log(1); //Number 

console.log(true); //Boolean

console.log(null); //Null

console.log(undefined);  // udefined

console.log([1, 2, 3, 4]); // array 

console.log({a:1, b:2, c:3}); // objeto

console.log([ {a:1}, { b:2 }, { c:3 } ]); // array de objetos

//Declarar array de objetos y realizar push

const usuarios = []
console.log("array vacío", usuarios)
const usuario1 = {nombre: "juan", identificacion: 111121}
usuarios.push(usuario1)
console.log("mismo array con el usuario nuevo", usuarios)

//Función sin return 
/*
function saludar (){
    console.log("hola")
}
console.log(saludar())

//Función con return
function saludar2 (){
    return "hola"
}
console.log(saludar2())
*/



/*
let nombre = 'juan'; //String

let año = 2022; //Number 

let loading = true; //Boolean

let valor = null; //Null

let sinDefinir = undefined;  // udefined

let lista = ["pan", "tomates", "albondigas"]; // array 

let auto = { color: "rojo", marca: "toyota", modelo: 2022 }; // objeto

*/
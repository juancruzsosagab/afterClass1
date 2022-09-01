// es una función que pasas como argumento

function callback (array){
    console.log(`He modificado el array y ahora tiene ${array.length} nombres`)
     
}
 
function modify(array, callback){
    array.push('Fabian')
    callback(array)
}

const names = [ 'Juan cruz', 'Ernesto' ]


modify(names , callback)
function coderHouse() {
	const soyEstudiante = true;
	console.log(soyEstudiante);
}

coderHouse(); // true
console.log(soyEstudiante);// undefined

const soyEstudiante = true;
function coderHouse() {
	console.log(soyEstudiante);
}

coderHouse(); // true
console.log(soyEstudiante);// undefined
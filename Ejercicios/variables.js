// Hoisting -- elevar
var noombre = 'Juan';
const name = 'Pedro'; //solo se puede usar una vez
let nambre = 'Luis';
console.log(noombre)
console.log(name)
console.log(nambre) 

const persona = {
    altura : 180,
    edad: 40, 
    nacionalidad: 'Mexicano',
    genero : 'M', 
    nombre : 'Juan Perez'
}

const { ...otros } = persona

const alumno = {
    escuela: 'ITESO',
    ...persona

}



console.log(otros);
console.log(persona);
console.log(alumno);


const numeros = [1, 2, 4, 3]

const operador = [ ...numeros];

const ordenados = numeros;

ordenados.sort();

console.log(ordenados);
console.log(numeros);



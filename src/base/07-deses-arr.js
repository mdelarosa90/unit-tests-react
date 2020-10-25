
const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;

export const retornaArreglo = () => ['ABC', 123];

//const [letras, numeros] = retornaArreglo();

//Tarea
// 1. El primer valor del arreglo se llamara nombre
// 2. El segundo se llamará setNombre;
const useState = (valor) => [valor, () => console.log('Hola Mundo')];
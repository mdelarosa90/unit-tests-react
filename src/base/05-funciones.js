// Funciones en JS
// const saludar = function(nombre) {
//     return `Hola, ${nombre}`;
// }
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => `Hola ${nombre}`;

export const getUser = () => (
    {
        uid: 'ABC123',
        userName: 'El_Papi1502'
    }
);

export const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC457',
        userName: nombre
    }
);

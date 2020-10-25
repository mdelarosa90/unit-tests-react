// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

//const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({nombre, clave, edad, rango = 'Capitán'}) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.56856,
            lng: -12.38343
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng}}= useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
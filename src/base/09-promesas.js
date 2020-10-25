import {getHeroesById, getHeroeByOwner} from './08-imp-ex';


export const getHeroesByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
          const heroe = getHeroesById(id);
          if (!heroe) {
              reject('No se pudo encontrar el heroe')
          } else {
              resolve(heroe);
          }
          //reject('No se pudo encontrar el heroe');
        }, 1500);
    });

    return promesa;
}
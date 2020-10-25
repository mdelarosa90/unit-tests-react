import heroes, {owners} from '../data/heroes';


export const getHeroesById = id => {
    return heroes.find((heroe) => heroe.id === id);
}

//console.log(getHeroesById(3));

export const getHeroeByOwner = owner => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroeByOwner('DC'));
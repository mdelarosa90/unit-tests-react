import heroes from '../../data/heroes';
import { getHeroesById, getHeroeByOwner } from '../../base/08-imp-ex';
import '@testing-library/jest-dom';

describe('Pruebas funciones Heroes', () => {
    test('debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroesById(id);
        const heroeData = heroes.find(h => h.id = id);
        expect(heroe).toEqual(heroeData);
    });

    test('debe retornar undefined si Heroe no existe', () => {
        const id = 10;
        const heroe = getHeroesById(id);
        expect(heroe).toBe(undefined);
    });

    test('debe retornar los heroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroeByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner);
        expect(heroe).toEqual(heroeData);
    });

    test('debe retornar los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroeByOwner(owner);
        expect(heroe.length).toBe(2);
    });


})
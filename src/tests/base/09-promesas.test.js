import {getHeroesByIdAsync} from '../../base/09-promesas';
import '@testing-library/jest-dom';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('getHeroesByIdAsync debe retornar un Héroe async', (done) => {
        const id = 1;
        getHeroesByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes.shift());
            done();
        });
    });

    test('Debe obtener un error si el heroe id no existe', (done) => {
        const id = 10;
        getHeroesByIdAsync(id).catch(e => {
            expect(e).toBe('No se pudo encontrar el heroe')
            done();
        })
    })
})
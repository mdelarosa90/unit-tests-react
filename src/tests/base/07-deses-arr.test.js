import {retornaArreglo} from '../../base/07-deses-arr'
import '@testing-library/jest-dom';

describe('Pruebas 07-deses-arr', ()=> {
    test('Debe retornar un string y un número', () => {
        const [letras, numeros] = retornaArreglo();

        //expect(testArr).towEqual(['ABC', 123])
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    });
})
import {getImagen} from '../../base/11-async-await';
import '@testing-library/jest-dom';

describe('Pruebas con async y await', () => {
    test('getImagen debe retornar una imagen', async() => {
      const url = await getImagen();
      expect(url.includes('https://')).toBe(true);      
    });

   
})
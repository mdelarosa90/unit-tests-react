import {getUser, getUsuarioActivo} from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () =>  {
    test('get user debe retornar un objeto', () => {
        const userTest =  {
            uid: 'ABC123',
            userName: 'El_Papi1502'
        }

        const user = getUser();
        expect(userTest).toEqual(user);
    });
    test('getUsuarioActivo debe retornar un objeto', () => {
        const userTest =  {
            uid: 'ABC457',
            userName: 'El_Papi1502'
        }

        const user = getUsuarioActivo('El_Papi1502');
        expect(userTest).toEqual(user);
    });
})
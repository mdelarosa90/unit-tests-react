import React from 'react';
import toJson from 'enzyme-to-json';
import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';


describe('Pruebas en <PrimeraApp />', () => {
    // test('debe mostrar mensaje, "Hola Soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const {getByText} = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });
    test('Debe mostrar <PrimeraAp /> correctamente ', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un Sayayin'
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    })
});
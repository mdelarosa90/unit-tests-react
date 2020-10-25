import React from 'react';
import CounterApp from '../CounterApp';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';


describe('Pruebas en <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />);
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);    
    });
    test('Debe mostrar <CounterAp /> correctamente ', () => {
       
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100} />)
        const counter = wrapper.find('h2').text().trim();
        expect(counter).toBe('100');
    });

    test('debe de incrementar con el botón de +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('debe decrementar con el botón de -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('debe resetear al valor por defecto al presionar el botón reset', () => {
        const wrapper = shallow(<CounterApp value={105} />)
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    })
    
    
});
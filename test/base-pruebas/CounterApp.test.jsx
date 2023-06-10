import { fireEvent, getAllByText, render, screen } from '@testing-library/react';
import { CounterApp } from '../../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {
    
    const initialvalue = 100;
    
    test('debe de hacer match con el snapshot', () => {

        //renderiza un componente en memoria
        const {container} = render( <CounterApp value={ initialvalue } /> )
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100 <CounterApp value={100}', () => {
        render( <CounterApp value={100} /> )
        expect(screen.getByText(100)).toBeTruthy();
        // expect(screen.getByRole('headig', {level:2}).innerHTML).toContain('100')
    });

    test('Debe de incrementar con el boton +1', () => {

        render( <CounterApp value={ initialvalue } />);
        //fireEvent es un metodo para disparar eventos
        fireEvent.click(screen.getByText('+1'))
        //Seleccion respectiva
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('Debe de Decrementar con el boton de -1', () => {

        render( <CounterApp value={ initialvalue } />);
        //fireEvent es un metodo para disparar eventos
        fireEvent.click(screen.getByText('-1'))
        //Seleccion respectiva
        expect(screen.getByText('99')).toBeTruthy();
    });

    
    test('Debe de funcionar con el boton de rest', () => {

        render( <CounterApp value={ initialvalue } />);
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // fireEvent.click(screen.getByText('Reset'))
        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}))
        expect(screen.getByText(initialvalue)).toBeTruthy();
    });
});
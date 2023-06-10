import { getAllByText, render, screen } from '@testing-library/react';
import { FirtsApp } from '../../src/FirtsApp';

describe('Pruebas en <FirtsApp2/>', () => {

    const title = 'Hola, que hay de tu vida';
    const subTitle = 'el caminar de los muertos vivientes';


    test('debe de hacer match con el snapshot', () => {

        const {container} = render( <FirtsApp title={title}/>)
        expect(container).toMatchSnapshot();
    });

    // -------------------------------------------------------------
    test('Debe de mostrar el mensaje "Hola, que hay de tu vida', () => {

        render( <FirtsApp title={title}/>)
        expect(screen.getByText(title)).toBeTruthy();
    });

    // -------------------------------------------------------------
    test('debe de mostrar el titulo en un h1', () => {
        render( <FirtsApp title={title}/>)
         expect( screen.getByRole('heading' , { level:1 }).innerHTML).toContain(title);
    });
    
    //--------------------------------------------------------------
    test('debe de mostrar el subtitulo enviado por props', () => {
        render( <FirtsApp title={title} subTitle={subTitle}/>)
        expect(screen.getAllByText(subTitle).length).toBe(2);
    });
});
import { getAllByText, render } from '@testing-library/react';
import { FirtsApp } from '../../src/FirtsApp';

describe('Pruebas en <FirtsApp/>', () => {
    
    // test('debe de hacer match con el snapshot', () => {

    //     //renderiza un componente en memoria
    //     const title = 'Hola que tal como estas?';
    //     const {container} = render( <FirtsApp title ={ title } /> )
    //     expect(container).toMatchSnapshot();
    // });

    test('debe de mostrar el titulo en un H1', () => {

        const title = 'Hola que tal soy gabriel mancilla ducuara';
        const {container, getByText, getByTestId } = render( <FirtsApp title ={ title } /> )
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
        //toBe() significa que todo el contenido del renderizado sea igual y no habran errores
        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola que tal soy gabriel mancilla ducuara';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render( <FirtsApp title ={title} subTitle={subTitle} /> )
        // el getByText se utiliza para un elemento por lo general el titulo, 
        //y para subtitulos se debe utilizar el getAllByText
        expect(getAllByText(subTitle).length).toBe(2);
    })

});
import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    
    test('getHeroeByid debe de retornar un Heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById (id)
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC'})

    })

    test('getHeroeByid debe de retornar undefined si no existe el id', () => {

        const id = 100;
        const hero = getHeroeById (id)
        
        // console.log( hero )
    })

    //Tarea
    test('getHeroesByOwner debe de regresar herores de DC', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner( owner )
        // console.log( heroes )
        expect( heroes.length ).toBe( 3 )
        expect( heroes ).toEqual( heroes.filter((heroe) => heroe.owner === owner))
    })


    //Debe de retornar un arreglo con los heroes de DC
    //Length ===  3 
    //toEqual al arreglo filtrado

    //debe de retornar un arreglo con los heroes de marvel
    //length === 2
    
    test('getHeroesByOwner debe de regresar herores de Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner( owner )
        // console.log( heroes )
        expect( heroes.length ).toBe( 2 )
        expect( heroes ).toEqual( heroes.filter((heroe) => heroe.owner === owner))
    })
})
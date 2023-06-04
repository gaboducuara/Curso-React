
// const nombre   = 'Gabriel';
// const apellido = 'Mancilla';


// const nombreCompleto = nombre + ' ' + apellido;
// const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre   = 'Gabriel';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
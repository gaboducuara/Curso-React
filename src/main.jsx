//IMPORTACION REACT
import React from 'react'
//HERRAMIENTA REACTDOM PARA RENDERIZAR REACT
import ReactDOM from 'react-dom/client'

//COMPONENTES HA RENDERIZAR
// import { FirtsApp } from './FirtsApp'
   import { CounterApp } from './CounterApp'
// import { Wow } from './wow'
// import { School } from './School'

//IMPORTACION DE ESTILO GLOBAL EN LA APLICACION
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirtsApp /> */}
    <CounterApp value = {1}/>
    {/* <Wow igor = 'Mi nombre es bani'/> */}
    {/* <School name = 'instituto tecnico industrial'/> */}
  </React.StrictMode>,
)

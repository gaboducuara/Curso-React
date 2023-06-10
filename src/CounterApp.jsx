import { useState } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';

export const CounterApp = ({ value }) => {
  
  const [ counter , setCounter] = useState(value);
  
  console.log(render)

  const handleAdd = ()  => {
  // console .log(newEvent);
    // setCounter (counter + 1)
    setCounter((c) => c + 1)
}

  const handleAddmenos = () => setCounter(counter - 1)
  const handleReset = () => setCounter( value ) 
        
    return (
      <>
        <h1> CounterApp </h1>
        <h3> { counter } </h3>

        <button onClick={ handleAdd }> +1 </button>
        <button onClick={handleAddmenos}> -1 </button>
        <button onClick={ handleReset }> Reset </button>
        <button aria-label='btn-reset' onClick={handleReset}>Reset</button>
      </>
    );
  };

// ProtoTypes
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

//Mensaje por defecto si no se cumple el ProtoTypes
CounterApp.defaultProps = {
  value: "No se encuentra el numero",
};

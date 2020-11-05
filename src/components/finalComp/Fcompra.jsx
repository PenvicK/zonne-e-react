import React from 'react';
import './fcompra.css';

function Fcompra(){
    function handleClick(e){
        e.preventDefault();
        alert('Compra Finalizada!!');
        console.log("Compra Fializada!");
    }

    return(
        <button className="subimitFcompra" type="submit" onClick={handleClick}>
          Finalizar Compra
        </button>
    );
}
export default Fcompra;
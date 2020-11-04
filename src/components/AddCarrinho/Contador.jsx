import React from  'react';
import {useState} from 'react';

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    function diminuirContador(){
        if(contador > 1){
            setContador(contador - 1);
        }
    }

    return(
        <div className="sectioncamera">
            <div className="quant">
                <div className="menos">
                    <button onClick={diminuirContador}>-</button>
                </div>
                <div className="num">
                    {contador}
                </div>
                <div className="mais">
                    <button onClick={adicionarContador}>+</button>
                </div>
            </div>
        </div>
    );
}
export default Contador;
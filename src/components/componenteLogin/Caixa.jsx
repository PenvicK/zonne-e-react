import React from 'react';
import './caixa.css';

function Caixa(props){
    return(
        <input className="credinput" type={props.funcao} placeholder={props.texto}></input>
    );
}
export default Caixa;
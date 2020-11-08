import React from 'react';
import './BotaoCadastro.css';

function BotaoCadastro(){
    function handleClick(evento){
     evento.preventDefault();
     window.alert('Pagina cadastro em desenvolvimento...');
     console.log("Pagina cadastro em desenvolvimento...");   
    }
    return(
        <button className="cadastro" type="submit" onClick={handleClick}>
            <a className="linkCadastro" href="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <strong>CADASTRO</strong>                               
            </a>
        </button>
    );
} 
export default BotaoCadastro;
import React from'react';
import PropsTexto from './TextoProps/PropsTexto';
import './menu.css';

function Menu(){
    return(
        <div id="menu">
            <ul className="cabecalho">
                <PropsTexto texto= "HOME" />
                <PropsTexto texto= "PRODUTO" />
                <PropsTexto texto= "SUPORTE" />
                <PropsTexto texto= "FAQ" />
                <PropsTexto texto= "LOGIN" />
                <PropsTexto texto= "CARRINHO" />
            </ul>
        </div>
    );
}
export default Menu;
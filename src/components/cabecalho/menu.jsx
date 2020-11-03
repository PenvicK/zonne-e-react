import React from'react';
import './menu.css';
import SubmitButton from "../submit-button/"

function Menu(){
    return(
        <div id="menu">
            <ul class="cabecalho">
                <li><a href=""><strong>HOME</strong></a></li>
                <SubmitButton nome="joazinho" />
                <li><a href=""><strong>PRODUTO</strong></a></li>
                <li><a href=""><strong>SUPORTE</strong></a></li>
                <li><a href=""><strong>FAQ</strong></a></li>
                <li><a href=""><strong>LOGIN</strong></a></li>
                <li><a href=""><strong>CARRINHO</strong></a></li>
            </ul>
        </div>
    );
}
export default Menu;
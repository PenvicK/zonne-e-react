import React from  'react';
import Contatos from './Contatos';
import Redes_sociais from './Redes_sociais';
import './Footer.css';

function Footer(){
    return(
        <footer className="caixa">
            <div className="feet">
                <div className="zonne">
                    <p>HOME</p>
                    <p>PRODUTO</p>
                    <p>SUPORTE</p>
                    <p>FAQ</p>
                    <p>LOGIN</p>
                    <p>CARRINHO</p>
                </div>
                <Contatos />
                <Redes_sociais />
            </div>
            <div className="copy">
                <p id="txt">© Copyright 2019 Zonne-e. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

import React from  'react';
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
                <div className="contatos">
                    <div className="contacto">
                        <img className="icon" src="https://cdn.discordapp.com/attachments/686368729923059721/768981929726312471/email.png"/>
                        <p>zonne-e@support.com</p>
                    </div>
                    <div className="contacto">
                        <img className="icon" src="https://cdn.discordapp.com/attachments/686368729923059721/768981924747935754/phone.png"/>
                        <p>+55 (45)4022-8922</p>
                    </div>
                    <div className="contacto">
                        <img className="icon" src="https://cdn.discordapp.com/attachments/686368729923059721/768981924747935754/phone.png"/>
                        <p>+55 (45)3028-3424</p>
                    </div>
                </div>
                <div className="redes">
                    <div className="sociais">
                        <img className="icon" src="https://cdn.discordapp.com/attachments/686368729923059721/768981899216551936/instagram-233.png"/>
                        <p>@Zonne-e</p>
                    </div>
                    <div className="sociais">
                        <img className="icon" src="https://cdn.discordapp.com/attachments/686368729923059721/768981932545146920/facebook.png"/>
                        <p>@Zonne-e</p>
                    </div>
                    <div className="sociais">
                        <img className="icon" src="https://cdn.discordapp.com/attachments/686368729923059721/768981927310917652/twitter.png"/>
                        <p>@Zonne-e</p>
                    </div>
                </div>
            </div>
            <div className="copy">
                <p id="txt">© Copyright 2019 Zonne-e. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
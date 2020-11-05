import React from  'react';
import './Footer.css';

function Contatos(){
    return(
        
        <div className="contatos">
            <div className="contacto">
                <img className="icon" src="https://cdn.discordapp.com/attachments/686368729923059721/768981929726312471/email.png"/>
                <p className="textoFooter" id= "textoEmail">zonne-e@support.com</p>
            </div>
            <div className="contacto">
                <img className="icon" src="https://cdn.discordapp.com/attachments/686368729923059721/768981924747935754/phone.png"/>
                <p className="textoFooter">+55 (45)4022-8922</p>
            </div>
            <div className="contacto">
                <img className="icon" src="https://cdn.discordapp.com/attachments/686368729923059721/768981924747935754/phone.png"/>
                <p className="textoFooter">+55 (45)3028-3424</p>
            </div>
        </div>
    );
}
export default Contatos;
import React from 'react';
import './Footer.css';

function Redes_sociais(){
    return(
        
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
    );
}
export default Redes_sociais;
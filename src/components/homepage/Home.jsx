import React from  'react';
import './estilohome.css';
import Banner from './Banner';
import zoone from './img1home.png';
import Texto from '../homepage/text/Texto'

function Home(){
    return(
        <section className="geral">
            <Banner />
            <div className="caixa">
                <div className="info"> 
                    <div className="texto">
                        <h2>Zoone-E</h2> 
                        <Texto texto="Um site para facilitar o monitoramento de painéis solares, mostrando o quanto de energia foi gasta, o quanto foi armazenado e acompanhamento da energia, podendo ser utilizado no computador pelo site(link do site) ou aplicativo mobile" />
                    </div>
                    <div className="img1">
                        <img src={zoone} alt="zoone"/>
                    </div>
                </div>
            </div>  
        </section>     
        );
}
export default Home;
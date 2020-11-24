import React from 'react';
import Avatar from '../components/avatar/Avatar';
import './styles/dadosP.css';
import Person from '../components/public/person3.jpg';

function DadosP(){
    return(
        <div className="box-dados">
            <div className="container-img-dados">
                <ul className="box-ul-dados">
                    <li>
                        <ul className="ul-dados">
                            <li className="iten-1-off">Produto 1</li>
                            <li className="iten-2-on">Produto 2</li>
                        </ul>
                    </li>
                    <li><Avatar url={Person} /></li>
                </ul>
            </div>
        </div>
    );

}
export default DadosP;
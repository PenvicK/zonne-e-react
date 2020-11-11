import React from 'react';
import './menu.css';
import logo from '../public/logo.png';
import {Link} from 'react-router-dom';

function MenuHbr(){
    return(
        <div id= "headerHbr">
            <div id="containerHbr">
                <div id= "container_menuHbr">
                    <div id="menuBar"for= "checkHbr">
                        <input type="checkbox" id="checkHbr" />
                        <div className="bar" id="bar1"></div>
                        <div className="bar" id="bar2"></div>
                        <div className="bar" id="bar3"></div>
                        <label For="checkHbr" id="labelHbr"></label>
                    </div>
                    
                    <div id="logoHbr">  
                        <img src={logo} alt="Logo" width="287,496" height="86,2488" />
                    </div>
                </div>
                <div id="menuHbr">
                    <ul className="cabecalhoHbr cabecalhoHbrOpen">
                        <Link to='/' className= "linkHeader">
                            <li><a href="" className= "linkHeaderHbr"><strong>home</strong></a></li>
                        </Link>
                        <Link to='/produto' className= "linkHeader">
                            <li><a href="" className= "linkHeaderHbr"><strong>produto</strong></a></li>
                        </Link>
                        <Link to='/suporte' className= "linkHeader">
                            <li><a href="" className= "linkHeaderHbr"><strong>suporte</strong></a></li> 
                        </Link>
                        <Link to='/faq' className= "linkHeader">
                            <li><a href="" className= "linkHeaderHbr"><strong>faq</strong></a></li> 
                        </Link>
                        <Link to='/login' className= "linkHeader">
                            <li><a href="" className= "linkHeaderHbr"><strong>login</strong></a></li>
                        </Link>
                        <Link to='/shop' className= "linkHeader"> 
                            <li><a href="" className= "linkHeaderHbr"><strong>carrinho</strong></a></li> 
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default MenuHbr;
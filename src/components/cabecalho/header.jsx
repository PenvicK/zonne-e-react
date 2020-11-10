import React from  'react';
import './menu.css';
import Menu from './Menu';
import logo from '../public/logo.png'




function Header(){
    return(
        <div>
            <header id="header">
                <nav id="container">
                    <div id="logo">  
                        <img src={logo} alt="Logo" width="287,496" height="86,2488" />
                    </div>
                    <Menu />
                </nav>
            </header>
            <div id= "headerHbr">
                <div id="containerHbr">
                    <div id= "container_menuHbr">
                        <div id="menuBar"for= "checkHbr">
                            <input type="checkbox" id="checkHbr" />
                            <label For="checkHbr" id="labelHbr"></label>
                            <div className="bar" id="bar1"></div>
                            <div className="bar" id="bar2"></div>
                            <div className="bar" id="bar3"></div>
                        </div>
                        
                        <div id="logoHbr">  
                            <img src={logo} alt="Logo" width="287,496" height="86,2488" />
                        </div>
                    </div>
                    <div id="menuHbr">
                        <ul className="cabecalhoHbr">
                            <li><a href="" className= "linkHeaderHbr"><strong>home</strong></a></li>
                            <li><a href="" className= "linkHeaderHbr"><strong>produto</strong></a></li>
                            <li><a href="" className= "linkHeaderHbr"><strong>suporte</strong></a></li> 
                            <li><a href="" className= "linkHeaderHbr"><strong>faq</strong></a></li> 
                            <li><a href="" className= "linkHeaderHbr"><strong>login</strong></a></li>
                            <li><a href="" className= "linkHeaderHbr"><strong>carrinho</strong></a></li> 
                        </ul>
                    </div>
                </div>
            </div>
            <script>
                
            </script>
        </div>
    );
}

export default Header;
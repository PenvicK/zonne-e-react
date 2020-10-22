import React from  'react';
import './menu.css';
import Menu from './menu';

function Header(){
    return(
        <header id="header">
            <nav id="container">
                <div id="logo">  
                    <img src="/logo.png" width="287,496" height="86,2488"/>
                </div>
                <Menu />
            </nav>
        </header>
    );
}

export default Header;
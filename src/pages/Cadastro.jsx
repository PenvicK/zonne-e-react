import React from 'react';
import Header from '../components/cabecalho/Header';
import Footer from '../components/rodape/Footer';
import cadastro from './cadastro.css';

function Cadastro(){
    return(
        <div>
            <Header />
            <div className ="">

                <header id="header">
                    <nav id="container">
                        <div id="logo">  
                            <img src="img/logo.png" width="287,496" height="86,2488"/>
                        </div>
                        <div id="menu">
                            <ul class="cabecalho">
                                <li><a href="Home.html"><strong>HOME</strong></a></li>
                                <li><a href="Produto.html"><strong>PRODUTO</strong></a></li>
                                <li><a href="Suporte pronto.html"><strong>SUPORTE</strong></a></li>
                                <li><a href="Suporte pronto.html"><strong>FAQ</strong></a></li>
                                <li><a href="login.html"><strong>LOGIN</strong></a></li>
                                <li><a href="carrinho.html"><img src="img/CARRINHO.jpg.png" width="53,55" height="45,75"></a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <section class="formulario">
                    <div class="titulo">
                    <h1>Cadastro</h1>
                    </div>
                    <form action="login.html" method="POST" class="cadastro">
                        <input type="text" name="nome completo" placeholder="Nome Completo:" size="40" id="campo"> 
                        <input type="text" name="cpf" placeholder="CPF:" size="12" maxlength="11"> 
                        <input type="text" name="telefone" placeholder="Telefone" size="12" maxlength="14"> 
                        <div class="nascimento">
                            <input type="text" name="data de nascimento" placeholder="Dia" size="1" maxlength="2"><input type="text" name="mes" placeholder="Mês" size="1" maxlength="2"><input type="text" name="ano" placeholder="Ano" size="1" maxlength="4"> 
                        </div>
                        <input type="text" name="e-Mail" placeholder="E-Mail" size="40"> 
                        <input type="text" name="confirmar e-mail" placeholder="Confirmar E-Mail" size="40">   
                        <input type="text" name="senha" placeholder="Senha" size="12" maxlength="15"> 
                        <input type="text" name="confirmar senha" placeholder="Confirmar Senha" size="12" maxlength="15"> 
                        <input type="text" name="cep" placeholder="CEP:" size="2" maxlength="8">
                        <input type="text" name="estado" placeholder="Estado" size="12" maxlength="40"> 
                        <input type="text" name="cidade" placeholder="Cidade" size="12" maxlength="40"> 
                        <input type="text" name="rua" placeholder="Rua" size="12" maxlength="30"> 
                        <input type="text" name="numero" placeholder="Numero" size="12" maxlength="10">
                        <input type="text" name="complemento" placeholder="Complemento" size="12" maxlength="40">
                    </form>
                    <div class="box">
                        <input type="checkbox">
                        Aceita os termos do contrato, ler contrato
                    </div>
                    <div> 
                        <input type="submit" value="Criar conta" name="Criar conta"></a></button>
                    </div> 
                </section>
            </div>          
        </div>      
    );
    
}
export default Cadastro; 
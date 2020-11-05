import React from 'react';
import Header from '../components/cabecalho/Header';
import Footer from '../components/rodape/Footer';
import Caixa from '../components/componenteLogin/Caixa';
import Checkbox from '../components/checkbox/Checkbox';
import './login.css';

function Login(){
    return(
        <div>
            <Header />
            <div className="box">
                <div>
                    <titulos><strong>LOGIN</strong></titulos>
                </div>
                <div className="container-header">
                    <div className="credenciais">
                        <Caixa funcao= "text" texto= "Email" />
                        <Caixa funcao= "password" texto= "Senha" />
                    </div>
                    <div className="cbox">
                        <div className="checkcaixa">
                            <Checkbox />
                            <botao className="sen">Mantenha-me Conectado</botao>
                        </div>
                        <a href="" className="container-forgot"><botao>Esqueceu a Senha?</botao></a>
                    </div>
                    <div>
                        <button className="enviar" type="submit"><a href=""><strong>ENTRAR</strong></a></button>
                        <button className="cadastro" type="submit"><a href=""><strong>CADASTRAR</strong></a></button>
                    </div>
                </div>
            </div> 
            <Footer />
        </div>  
    );
}
export default Login;
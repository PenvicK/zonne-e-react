import React from 'react';
import Caixa from '../components/componenteLogin/Caixa';
import Checkbox from '../components/checkbox/Checkbox';
import './login.css';
import BotaoCadastro from '../components/CadastroPagina/BotaoCadastro';
import EntrarButton from '../components/botaoEntrar/EntrarButton';
import Anuncio from '../components/anuncio/Anuncio'
import Fcompra from '../components/finalComp/Fcompra'

function Login(){
    return(
        <div>
            
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
                    <EntrarButton />
                    <BotaoCadastro />
                    </div>
                </div>
            </div> 
            <Fcompra />
            <Anuncio />
            
        </div>  
    );
}
export default Login;
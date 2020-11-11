import React from 'react';
import'./cadastro.css';

function Cadastro(){
    return(
        <section className="formulario">
            <div className="titulo">
                <h1>Cadastro</h1>
            </div>
            <form action="login.html" method="POST" className="cadastroPage">
                <input type="text" name="nome completo" placeholder="Nome Completo:" size="40" id="campo" /> 
                <input type="text" name="cpf" placeholder="CPF:" size="12" maxlength="11" /> 
                <input type="text" name="telefone" placeholder="Telefone" size="12" maxlength="14" /> 
                <div className="nascimento">
                    <input type="text" name="data de nascimento" placeholder="Dia" size="1" maxlength="2" />
                    <input type="text" name="mes" placeholder="Mês" size="1" maxlength="2" />
                    <input type="text" name="ano" placeholder="Ano" size="1" maxlength="4" /> 
                </div>
                <input type="text" name="e-Mail" placeholder="E-Mail" size="40" /> 
                <input type="text" name="confirmar e-mail" placeholder="Confirmar E-Mail" size="40" />   
                <input type="text" name="senha" placeholder="Senha" size="12" maxlength="15" /> 
                <input type="text" name="confirmar senha" placeholder="Confirmar Senha" size="12" maxlength="15" /> 
                <input type="text" name="cep" placeholder="CEP:" size="2" maxlength="8" />
                <input type="text" name="estado" placeholder="Estado" size="12" maxlength="40" /> 
                <input type="text" name="cidade" placeholder="Cidade" size="12" maxlength="40" /> 
                <input type="text" name="rua" placeholder="Rua" size="12" maxlength="30" /> 
                <input type="text" name="numero" placeholder="Numero" size="12" maxlength="10" />
                <input type="text" name="complemento" placeholder="Complemento" size="12" maxlength="40" />
            </form>
            <div className="box">
                <input type="checkbox" />
                Aceita os termos do contrato, ler contrato
            </div>
            <div> 
                <input type="submit" value="Criar conta" name="Criar conta" />
            </div> 
        </section>      
    );
    
}
export default Cadastro; 
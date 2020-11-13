import React from 'react';
import'./styles/cadastro.css';
<<<<<<< HEAD
import '../components/componenteLogin/Caixa';
import Caixa from '../components/componenteLogin/Caixa';
import Checkbox from'../components/checkbox/Checkbox';
=======
>>>>>>> f15437cb605aa9d7ed87708cafaa924f577f88fa

function Cadastro(){
    return(
        <section className="formulario">
            <div className="titulo">
                Cadastro
            </div>
            <form action="login.html" method="POST" className="cadastroPage">
                <Caixa funcao="text" name="nome completo" texto="Nome Completo:" size="40" id="campo" /> 
                <Caixa funcao="text" name="cpf" texto="CPF:" size="12" maxlength="11" /> 
                <Caixa funcao="text" name="telefone" texto="Telefone" size="12" maxlength="14" /> 
                <div className="nascimento">
                    <Caixa funcao="text" name="data de nascimento" texto="Dia" size="1" maxlength="2" />
                    <Caixa funcao="text" name="mes" texto="Mês" size="1" maxlength="2" />
                    <Caixa funcao="text" name="ano" texto="Ano" size="1" maxlength="4" /> 
                </div>
                <Caixa funcao="text" name="e-Mail" texto="E-Mail" size="40" /> 
                <Caixa funcao="text" name="confirmar e-mail" texto="Confirmar E-Mail" size="40" />   
                <Caixa funcao="password" name="senha" texto="Senha" size="12" maxlength="15" /> 
                <Caixa funcao="password" name="confirmar senha" texto="Confirmar Senha" size="12" maxlength="15" /> 
                <Caixa funcao="text" name="cep" texto="CEP:" size="2" maxlength="8" />
                <Caixa funcao="text" name="estado" texto="Estado" size="12" maxlength="40" /> 
                <Caixa funcao="text" name="cidade" texto="Cidade" size="12" maxlength="40" /> 
                <Caixa funcao="text" name="rua" texto="Rua" size="12" maxlength="30" /> 
                <Caixa funcao="text" name="numero" texto="Numero" size="12" maxlength="10" />
                <Caixa funcao="text" name="complemento" texto="Complemento" size="12" maxlength="40" />

                <div className="boxCadastro">
                    <Checkbox />
                    Aceita os termos do contrato, ler contrato
                </div>
                <div> 
                    <input type="submit" value="Criar conta" name="Criar conta" />
                </div> 
            </form>
            
        </section>      
    );
    
}
export default Cadastro; 
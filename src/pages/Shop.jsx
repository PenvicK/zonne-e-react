import React from 'react';
import './styles/shop.css';
import camera from '../components/public/camera.png';
import Contador from '../components/AddCarrinho/Contador';
import Fcompra from '../components/finalComp/Fcompra';

function Shop(){
    return(
        <section class="boxShop">
            <div class="sectioncameraShop">
                <img src={camera} id="cameraShop" alt='camera' />
                <Contador />
            </div>
            <div class="formShop">
                <div class="txtShop">
                    <div>
                        NOME:
                    </div>
                    <div>
                        CPF:
                    </div>
                    <div>
                        ESTADO:
                    </div>
                    <div>
                        CIDADE:
                    </div>
                    <div>
                        BAIRRO:
                    </div>
                    <div>
                        RUA, N°:
                    </div>
                </div>
                <div class="caixasShop">
                    <div class="altShop">
                        <button class="alterarShop"><strong>ALTERAR DADOS</strong></button>
                    </div>
                    <div class="cancel">
                        <button class="cancelarShop"><strong>CANCELAR PEDIDO</strong></button>
                    </div>
                </div>
            </div>
            <div class="form2Shop">
                <div class="txtShop">
                    <div>
                        VALOR DO PRODUTO:
                    </div>
                    <div>
                        VALOR DO FRETE:
                    </div>
                    <div>
                        VALOR TOTAL DO PRODUTO:
                    </div>
                    <div>
                        VALOR TOTAL:
                    </div>
                </div>
                <div class="finalShop">
                    <Fcompra />
                </div>
            </div>
        </section>
    );
}
export default Shop;
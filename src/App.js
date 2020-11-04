import React from 'react';
import Header from './components/Cabecalho/Header';
import Footer from './components/rodape/Footer';
import Contador from './components/AddCarrinho/Contador';


function App() {
  return (
    <div>
      <Header />
      <Contador />
      <Footer/>
    </div>
  );
}

export default App;

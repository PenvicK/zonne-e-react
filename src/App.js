import React from 'react';
import Header from './components/cabecalho/Header';
import Footer from './components/rodape/Footer';
import Contador from './components/AddCarrinho/Contador';
import Home from './components/homepage/Home';


function App() {
  return (
    <div>
      <Header />
      <Contador />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

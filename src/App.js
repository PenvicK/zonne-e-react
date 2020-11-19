import React from 'react';
import Header from './components/cabecalho/Header';
import Footer from './components/rodape/Footer';
import Home from './components/homepage/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Produto from './pages/Produto';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Suporte from './pages/Suporte';
import Faq from './pages/Faq';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produto" component={Produto} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/suporte" component={Suporte} />
        <Route path="/faq" component={Faq} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

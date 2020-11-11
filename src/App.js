import React from 'react';
import Header from './components/cabecalho/Header';
import Footer from './components/rodape/Footer';
import Home from './components/homepage/Home';
import Login from './pages/Login';
//import Cadastro from './pages/Cadastro';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

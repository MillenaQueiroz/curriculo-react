
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home'
import Sobre from './components/Sobre';
import Educacao from './components/Educacao';
import Complementos from './components/Complementos';
import Skills from './components/Skills'
import Contato from './components/Contato'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Sobre' exact component={Sobre}/>
        <Route path='/Educacao' exact component={Educacao}/>
        <Route path='/Complementos' exact component={Complementos}/>
        <Route path='/Skills' exact component={Skills}/>
        <Route path='/Contato' exact component={Contato}/>
      </Switch>
    </Router>
  );
}

export default App;

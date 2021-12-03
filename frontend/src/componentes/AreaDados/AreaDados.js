import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Operadoras from '../Operadoras/Operadoras';
import OperadorasEditar from '../Operadoras/OperadorasEditar';
import Telefones from '../Telefones/Telefones';
import TelefonesEditar from '../Telefones/TelefonesEditar';

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/operadoras" component={Operadoras}></Route>
        <Route exact path="/operadoras/:id" component={OperadorasEditar}></Route>
        <Route exact path="/telefones" component={Telefones}></Route>
        <Route exact path="/telefones/:id" component={TelefonesEditar}></Route>        
      </Switch>
    </div>
  );
}


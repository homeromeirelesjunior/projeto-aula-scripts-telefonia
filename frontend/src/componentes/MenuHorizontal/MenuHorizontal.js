import React from 'react';
import { Link } from 'react-router-dom';

import './MenuHorizontal.css';

export default function MenuHorizontal() {
  return (

      <div>
        <div className="menuHorizontal">
          <nav className="navMenu">
            <ul>
              <li> <Link to="/"> Início </Link> </li>
              <li> <Link to="/operadoras"> Operadoras   </Link> </li>
              <li> <Link to="/telefones"> Telefones </Link> </li>
              <li> <Link to="/chamadas"> Chamadas </Link> </li>
              <li> <Link to="/arquivos"> Arquivos </Link> </li>
              <li> <Link to="/configuracoes"> Configurações </Link> </li>
            </ul>
          </nav>
        </div>
      </div>
  );
}
import React from "react" 
import './Operadoras.css';
import urlapi from "../../services/api.js"
import TabelaOperadoras from "../Tabelas/TabelaOperadoras";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Operadoras() {
  const [operadoras, setOperadoras] = useState([])
  
  useEffect(() => {
    urlapi.get('operadoras')
      .then(response => response.data)
      .then(response => setOperadoras(response));
  }, []
  )

  return (
    <>
        <div id="idOperadoras" className="operadoras">
          <div id="corpo_rel">
            <legend> Registros de Operadoras Cadastrados</legend>
            {/* <Link to="/operadoras/0" value={'I'}>incluir Nova Operadora</Link> */}

            <div>

              <TabelaOperadoras
                items={operadoras}
                chave={'/operadoras/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Operadoras;
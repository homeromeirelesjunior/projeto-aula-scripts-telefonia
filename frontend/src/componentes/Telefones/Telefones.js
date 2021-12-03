import React from "react"
import './Telefones.css';
import urlapi from "../../services/api.js"
import TabelaTelefones from "../Tabelas/TabelaTelefones";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Telefones() {
  const [telefones, setTelefones] = useState([])
  
  useEffect(() => {
    urlapi.get('telefones')
      .then(response => response.data)
      .then(response => setTelefones(response));
  }, []
  )

  return (
    <>
        <div id="idTelefones" className="telefones">
          <div id="corpo_rel">
            <legend> Registros de Telefones Cadastrados</legend>
            {/* <Link to="/operadoras/0" value={'I'}>incluir Nova Operadora</Link> */}

            <div>

              <TabelaTelefones
                items={telefones}
                chave={'/telefones/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Telefones;
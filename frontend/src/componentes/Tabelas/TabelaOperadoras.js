import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.ope_codigo}>
          <td> {item.ope_codigo} </td>
          <td> {item.ope_nome} </td>
          <td> {item.ope_fantasia} </td>
          <td> {item.ope_prefixo} </td>
          <td> {item.ope_cidade} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.ope_codigo} > Editar </a></td>
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'left' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Nome </th>
            <th scope="col"> Fantasia </th>
            <th scope="col"> Prefixo </th>
            <th scope="col"> Cidade </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Nova Operadora</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )
}
import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.tel_codigo}>
          <td> {item.tel_codigo} </td>
          <td> {item.tel_descricao} </td>
          <td> {item.tel_modelo} </td>
          <td> {item.tel_cor} </td>
          <td> {item.tel_chips} </td>
          <td> {item.ope_codigo} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.tel_codigo} > Editar </a></td>
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
            <th scope="col"> Descrição </th>
            <th scope="col"> Modelo </th>
            <th scope="col"> Cor </th>
            <th scope="col"> Qtd. Chips </th>
            <th scope="col"> Código Operadora </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Telefone</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )
}
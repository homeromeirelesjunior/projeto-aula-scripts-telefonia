import React from "react"
import './OperadorasEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function AutoresEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    const [codigo, setCodigo] = useState(0);

    const [nome, setNome] = useState('');
    const [fantasia, setFantasia] = useState('');
    const [prefixo, setPrefixo] = useState('');
    const [cidade, setCidade] = useState('');

    const [checked, setChecked] = useState(false);
    //    const [nomePag, setNomePag] = useState(false);

    const { id } = useParams();

    function IfCrud() {
        //        let nomeCampo = '';
        console.log('Id Operadora: ' + id + ' - ' + idBoolean)
        if (id === 0) {
            //            nomeCampo = 'Inclusão de Autor';
            idBoolean = true;
        } else {
            //            nomeCampo = 'Alteração de Autor';
        }
        //        setNomePag(nomeCampo);
    }

    useEffect(() => {
        async function getOperadoras() {
            console.log('Operadoras: ' + id + ' - ' + idBoolean)
            if (id == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/operadoras/' + id);
                console.log(data)

                setCodigo(data[0].ope_codigo);

                setNome(data[0].ope_nome);
                setFantasia(data[0].ope_fantasia);
                setPrefixo(data[0].ope_prefixo);
                setCidade(data[0].ope_cidade);

                console.log(data[0].ope_nome)
                //                } catch (error) {
                //                    alert("Ocorreu um erro...");
                //                }
            }
        }
        IfCrud();
        getOperadoras();
    }, []);


    //    function toggle() {
    //        setChecked(!checked)
    //    }

    async function handleOperadoras(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.ope_nome);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Autor: ",id)
                if (id == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('operadoras', data)
                        .then(response => alert('Inserção'))
                } else {
                    console.log("Alteração de Registro! ",id)
                    await urlapi.put('/operadoras/' + id, data)
                        .then(response => alert('Edição'))
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handleOperadoras} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="ope_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome da Operadora </label>
                            <input type="text" className="form-control"
                                name="ope_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Fantasia </label>
                            <input type="text" className="form-control" name="ope_fantasia"
                                id="ope_fantasia"
                                value={fantasia}
                                onChange={e => setFantasia(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Prefixo </label>
                            <input type="text" className="form-control" name="ope_prefixo"
                                id="ope_prefixo"
                                value={prefixo}
                                onChange={e => setPrefixo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Cidade </label>
                            <input type="text" className="form-control" name="ope_cidade"
                                id="ope_cidade"
                                value={cidade}
                                onChange={e => setCidade(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/operadoras" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}

import React from "react"
import './TelefonesEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function AutoresEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    //    const [autor, setAutor] = useState([]);

    const [codigo, setCodigo] = useState(0);

    const [descricao, setDescricao] = useState('');
    const [modelo, setModelo] = useState('');
    const [cor, setCor] = useState('');
    const [chips, setChips] = useState('');
    const [codigoOperadora, setCodigoOperadora] = useState('');

    const [checked, setChecked] = useState(false);
    //    const [nomePag, setNomePag] = useState(false);

    const { id } = useParams();

    function IfCrud() {
        //        let nomeCampo = '';
        console.log('Id Telefone: ' + id + ' - ' + idBoolean)
        if (id === 0) {
            //            nomeCampo = 'Inclusão de Autor';
            idBoolean = true;
        } else {
            //            nomeCampo = 'Alteração de Autor';
        }
        //        setNomePag(nomeCampo);
    }

    useEffect(() => {
        async function getTelefones() {
            console.log('Telefones: ' + id + ' - ' + idBoolean)
            if (id == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/telefones/' + id);
                console.log(data)

                setCodigo(data[0].tel_codigo);

                setDescricao(data[0].tel_descricao);
                setModelo(data[0].tel_modelo);
                setCor(data[0].tel_cor);
                setChips(data[0].tel_chips);
                setCodigoOperadora(data[0].ope_codigo);
            }
        }
        IfCrud();
        getTelefones();
    }, []);


    //    function toggle() {
    //        setChecked(!checked)
    //    }

    async function handleTelefones(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.tel_descricao);

        try {
            if (descricao.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Telefone: ",id)
                if (id == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('telefones', data)
                        .then(response => alert('Inserção'))
                } else {
                    console.log("Alteração de Registro! ",id)
                    await urlapi.put('/telefones/' + id, data)
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

                <form className="form--autor" onSubmit={handleTelefones} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="tel_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Descrição do Telefone </label>
                            <input type="text" className="form-control"
                                name="tel_descricao"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Modelo </label>
                            <input type="text" className="form-control" name="tel_modelo"
                                id="tel_modelo"
                                value={modelo}
                                onChange={e => setModelo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Cor </label>
                            <input type="text" className="form-control" name="tel_cor"
                                id="tel_cor"
                                value={cor}
                                onChange={e => setCor(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Chips </label>
                            <input type="text" className="form-control" name="tel_chips"
                                id="tel_chips"
                                value={chips}
                                onChange={e => setChips(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Código Operadora </label>
                            <input type="text" className="form-control" name="ope_codigo"
                                id="ope_codigo"
                                value={codigoOperadora}
                                onChange={e => setCodigoOperadora(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/telefones" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}

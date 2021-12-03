const models = require('../models/telefonesModels.js');

module.exports = {
    // post
    telefonesNova,
    
    // get
    telefonesMenu,
    telefonesGetAll,
    telefonesGetById,

    // put/delete
    telefonesEditById
}

// post

function telefonesNova(req, res) {
    var id = req.body;
    console.log("Gravando Novo Registro de telefones...");
    console.log(req.body);
    id.ope_codigo = null;
    console.log("Inserindo novo registro de telefones...");
    models.novatelefones(id, function (err, result) {
        if (err) {
            throw err;
        }
        res.send(result);
    })
}

// gets

function telefonesMenu(req, res) {
    models.getAlltelefones(function(err, resposta) {
        console.log('Retorno de Operadoras {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function telefonesGetAll(req, res) {
    console.log('Listar telefones {M O D E L}');
    models.getAlltelefones(function(err, resposta) {
        console.log('Retorno de telefones {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })  
}

function telefonesGetById(req, res) {
    const id = req.params.id
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdtelefones(id, function (err, resposta) {
        console.log('Retorno de telefones Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

// put/delete

function telefonesEditById(req, res) {
    const id = req.body
    console.log('Parametro Esperado: ' + id);
    models.editartelefones(id, function(err, resposta) {
        console.log('Retorno de Telefones Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}
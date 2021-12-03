const models = require('../models/operadorasModels.js');

module.exports = {
    // post
    operadorasNova,
    
    // get
    operadorasMenu,
    operadorasGetAll,
    operadorasGetById,

    // put/delete
    operadorasEditById
}

// post

function operadorasNova(req, res) {
    var id = req.body;
    console.log("Gravando Novo Registro de Operadoras...");
    console.log(req.body);
    id.ope_codigo = null;
    console.log("Inserindo novo registro de Operadoras...");
    models.novaOperadoras(id, function (err, result) {
        if (err) {
            throw err;
        }
        res.send(result);
    })
}

// gets

function operadorasMenu(req, res) {
    models.getAllOperadoras(function(err, resposta) {
        console.log('Retorno de Operadoras {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function operadorasGetAll(req, res) {
    console.log('Listar Operadoras {M O D E L}');
    models.getAllOperadoras(function(err, resposta) {
        console.log('Retorno de Operadoras {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })  
}

function operadorasGetById(req, res) {
    const id = req.params.id
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdOperadoras(id, function (err, resposta) {
        console.log('Retorno de Operadoras Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

// put/delete

function operadorasEditById(req, res) {
    const id = req.body
    console.log('Parametro Esperado: ' + id);
    models.editarOperadoras(id, function(err, resposta) {
        console.log('Retorno de Operadoras Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}
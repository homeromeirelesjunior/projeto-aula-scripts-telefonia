const conexao = require('../../config/conexao.js'); 

module.exports = {
    // post
    novatelefones,

    // get
    getAlltelefones,
    getByIdtelefones,

    // put/delete
    editartelefones      
}

// post

function novatelefones(id, callback) {
    var msql = 'INSERT INTO telefones SET ? ';

	conexao.query(msql, id, callback);
}

// get

function getAlltelefones (callback) {
    conexao.query('select * from telefones', callback)    
}

function getByIdtelefones (id, callback) {
    const querySelect = 'select * from telefones WHERE tel_codigo = ?'
    conexao.query(querySelect, [id], callback)
}

// put/delete

function editartelefones(id, callback) {
    console.log('Estou alterando o telefones { M O D E L } .......' + id);

    var msql = "UPDATE telefones SET tel_descricao = '" + id.tel_descricao +
    "' , tel_modelo = '" + id.tel_modelo + 
    "' , tel_cor = '" + id.tel_cor + 
    "' , tel_chips = '" + id.tel_chips + 
    "'  WHERE tel_codigo = '" + id.tel_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}
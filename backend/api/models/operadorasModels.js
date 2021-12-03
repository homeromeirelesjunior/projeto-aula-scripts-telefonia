const conexao = require('../../config/conexao.js');

module.exports = {
    // post
    novaOperadoras,

    // get
    getAllOperadoras,
    getByIdOperadoras,

    // put/delete
    editarOperadoras      
}

// post

function novaOperadoras(id, callback) {
    var msql = 'INSERT INTO operadoras SET ? ';

	conexao.query(msql, id, callback);
}

// get

function getAllOperadoras (callback) {
    conexao.query('select * from operadoras', callback)    
}

function getByIdOperadoras (id, callback) {
    const querySelect = 'select * from operadoras WHERE ope_codigo = ?'
    conexao.query(querySelect, [id], callback)
}

// put/delete

function editarOperadoras(id, callback) {
    console.log('Estou alterando o operadoras { M O D E L } .......' + id);

    var msql = "UPDATE operadoras SET ope_nome = '" + id.ope_nome +
    "' , ope_fantasia = '" + id.ope_fantasia + 
    "' , ope_prefixo = '" + id.ope_prefixo + 
    "' , ope_cidade = '" + id.ope_cidade + 
    "'  WHERE ope_codigo = '" + id.ope_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}
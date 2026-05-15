var database = require("../database/config");

function cadastrar(problemaAbandono) {

    var instrucaoSql = `
        INSERT INTO pesquisa (problemaAbandono)
        VALUES ('${problemaAbandono}');
    `;

    return database.executar(instrucaoSql);
}

function buscarDadosGrafico() {

    var instrucaoSql = `
        SELECT problemaAbandono,
        COUNT(problemaAbandono) AS quantidade
        FROM pesquisa
        GROUP BY problemaAbandono;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscarDadosGrafico
};
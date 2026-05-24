var database = require("../database/config");

function cadastrar(problemaAbandono) {
    console.log(">> MODEL PESQUISA - cadastrar");
    console.log("Valor recebido:", problemaAbandono);
    var instrucaoSql = `
        INSERT INTO pesquisa (problemaAbandono)
        VALUES ('${problemaAbandono}');
    `;
    console.log("Executando SQL INSERT pesquisa...");
    return database.executar(instrucaoSql);
}

function buscarDadosGrafico() {
      console.log(">> MODEL PESQUISA - buscar gráfico");
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
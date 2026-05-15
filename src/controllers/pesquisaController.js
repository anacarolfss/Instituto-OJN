var pesquisaModel = require("../models/pesquisaModel");

function cadastrar(req, res) {

    var problemaAbandono = req.body.problemaAbandonoServer;

    pesquisaModel.cadastrar(problemaAbandono)

    .then(function(resultado) {
        res.status(200).json(resultado);
    })

    .catch(function(erro) {
        console.log(erro);
        res.status(500).json(erro);
    });
}

function buscarDadosGrafico(req, res) {

    pesquisaModel.buscarDadosGrafico()

    .then(function(resultado) {
        res.status(200).json(resultado);
    })

    .catch(function(erro) {
        console.log(erro);
        res.status(500).json(erro);
    });
}

module.exports = {
    cadastrar,
    buscarDadosGrafico
};


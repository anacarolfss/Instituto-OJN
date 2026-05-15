var express = require("express");
var router = express.Router();

var pesquisaController = require("../controllers/pesquisaController");

//salva os dados 
router.post("/cadastrar", function(req, res) {
    pesquisaController.cadastrar(req, res);
});
// pega esses dados
router.get("/grafico", function(req, res) {
    pesquisaController.buscarDadosGrafico(req, res);
});

module.exports = router;
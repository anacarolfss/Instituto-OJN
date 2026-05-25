var ambiente_processo = 'producao'
// var ambiente_processo = 'desenvolvimento'

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';



require("dotenv").config({path: caminho_env}); //evita q os dados sensiveis fique expostos no código 

const express = require('express');
const cors = require('cors');
const path = require('path');
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

const app = express();

const pesquisaRouter = require("./src/routes/pesquisa");

const usuarioRouter = require("./src/routes/usuarios");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuarios", usuarioRouter);
app.use("/pesquisas", pesquisaRouter);

app.listen(PORTA_APP, function () {
  console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://${HOST_APP}:${PORTA_APP}`);
});


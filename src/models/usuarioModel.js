var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email, data_nascimento FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, dataNascimento, senha) {
    console.log("CADASTRO:", nome, email, dataNascimento, senha);
   
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, data_nascimento, senha) VALUES ('${nome}', '${email}', '${dataNascimento}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};
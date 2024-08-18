const express = require('express')
const app = express()
const port = 3000
const router = require('./routers/app')
const conexao = require('./conexoes/conexao')
const tabelas = require('./conexoes/tabelas')

router(app, express) // Configurando as rotas principais
tabelas.init(conexao) // Inicializando a conexão e a tabela

app.listen(port, (error) => {
    if (error) {
        console.error('Error starting server:', error)
        return 
    }
    console.log(`Server on port: ${port}`)
})
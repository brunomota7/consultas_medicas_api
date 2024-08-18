const express = require('express')
const app = express()
const port = 3000
const router = require('./routers/app')
const conexao = require('./conexoes/conexao')
const tabelas = require('./conexoes/tabelas')

tabelas.init(conexao)
router(app)
app.use(router)

app.listen(port, (error) => {
    if (error) {
        console.error('Error starting server:', error)
        return 
    }
    console.log(`Server on port: ${port}`)
})
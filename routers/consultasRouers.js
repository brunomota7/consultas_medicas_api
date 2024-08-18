const { Router } = require('express')
const router = Router()
const consultaController = require('../controller/consultaController')

// Get
router.get('/consultas', (req, res) => {
    const resposta = consultaController.buscarConsultas()
    res.send(resposta)
})

// Post
router.post('/consultas/add', (req, res) => {
    const resposta = consultaController.criarConsulta()
    res.send(resposta)
})

// Put
router.put('/consulta/:id', (req, res) => {
    const { id } = req.params
    const resposta = consultaController.atualizandoConsulta(id)
    res.send(resposta)
})

// Delete
router.delete('/consulta/delete/:id', (req, res) => {
    const { id } = req.params
    const resposta = consultaController.deletaConsulta(id)
    res.send(resposta)
})

module.exports = router;

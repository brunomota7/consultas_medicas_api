const { Router } = require('express')
const router = Router()
const consultaController = require('../controller/consultaController')

router.get('/consultas', (req, res) => { // Get
    consultaController.buscarConsultas()
        .then((consultas) => res.status(200).json(consultas))
        .catch((error) => res.status(400).json({ error: error.message }))
})

router.post('/consultas/add', (req, res) => { // Post
    const novoAtendimento = req.body
    consultaController.criarConsulta(novoAtendimento)
        .then((atendimento) => res.status(201).json(atendimento))
        .catch((error) => res.status(400).json({ error: error.message }))
})

router.put('/consultas/:id', (req, res) => { // Put
    const { id } = req.params
    const atendimentoAtualizado = req.body
    consultaController.atualizandoConsulta(atendimentoAtualizado, id)
        .then((resultConsultaAtualizado) => res.status(200).json(resultConsultaAtualizado))
        .catch((error) => res.status(400).json({ error: error.message }))
})

router.delete('/consultas/delete/:id', (req, res) => { // Delete
    const { id } = req.params
    consultaController.deletaConsulta(id)
        .then((resultConsultaDeletada) => res.status(200).json(resultConsultaDeletada))
        .catch((error) => res.status(400).json({ error: error.message }))
})

module.exports = router;

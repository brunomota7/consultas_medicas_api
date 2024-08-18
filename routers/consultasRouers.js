const { Router } = require('express')
const router = Router()

// Get
router.get('/consultas', (req, res) => {
    res.send('Buscando consultas...')
})

// Post
router.post('/consultas/add', (req, res) => {
    res.send('Cadastrando consulta...')
})

// Put
router.put('/consulta/:id', (req, res) => {
    res.send(`Atualizando consulta id: ${id}...`)
})

// Delete
router.delete('/consulta/delete/:id', (req, res) => {
    res.send(`Deletando consulta id: ${id}...`)
})

module.exports = router;

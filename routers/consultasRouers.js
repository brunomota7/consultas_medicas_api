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
    const { id } = req.params
    res.send(`Atualizando consulta id: ${id}...`)
})

// Delete
router.delete('/consulta/delete/:id', (req, res) => {
    const { id } = req.params
    res.send(`Deletando consulta id: ${id}...`)
})

module.exports = router;
